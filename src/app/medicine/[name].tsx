import { Text, View, StyleSheet, ImageBackground, ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import Bula from '@/components/medicine/bula';
import { TopBar } from '@/components/topBar';
import { fontFamily, colors } from '@/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useCallback } from 'react';
import { getMedicines } from '@/services/index';
import { ErrorModal } from '@/components/modals/errorModal';

// Centralized assets for images
export const images = {
  searchPanelBg: require('@/assets/search-panel_bg.png'),
};

// Type definition for the Medicine object used in the component
type Medicine = {
  nome: string;
  principio_ativo: string;
  bula: { [key: string]: { Descrição: string } };// Medicine information (bula) with descriptions
};

// Type definition for the API response
type MedicineApiResponse = {
  nome: string;
  principioAtivo: string;
  bula: { [key: string]: string };
};

// Mapping of database bula keys to user-friendly title templates
const bulaTitleTemplates: { [key: string]: string } = {
  indicacao: 'Para que {nome} é indicado?',
  uso: 'Como devo usar {nome}?',
  funcionamento: 'Como {nome} funciona?',
  naoUsar: 'Quando não devo usar {nome}?',
  antesDeUsar: 'O que devo saber antes de usar {nome}?',
  males: 'Quais os males que {nome} pode me causar?',
  armazenamento: 'Onde, como e por quanto tempo posso guardar {nome}?',
  esquecerDeUsar: 'O que devo fazer quando eu me esquecer de usar {nome}?',
  superdose: 'Superdose - o que fazer se alguém usar uma quantidade maior do que a indicada do {nome}?',
  apresentacao: 'Apresentações',
  composicao: 'Composição',
};

// Utility function to map raw bula data from API to a formatted structure
const mapBulaData = (bula: { [key: string]: string }, nome: string) => {
  const mappedBula: { [key: string]: { Descrição: string } } = {};
  Object.keys(bula).forEach((key) => {
    if (key !== 'id') { // Exclude 'id' field from bula data
      const titleTemplate = bulaTitleTemplates[key] || key; // Use template or key as fallback
      const newKey = titleTemplate.replace('{nome}', nome); // Replace placeholder with medicine name
      mappedBula[newKey] = { Descrição: bula[key] }; // Assign description to new key
    }
  });
  return mappedBula;
};

export default function Medicine() {
  const params = useLocalSearchParams<{ name: string }>(); // Get the medicine name from route parameters
  const navigation = useNavigation(); // Hook to access navigation object
  const [medicine, setMedicine] = useState<Medicine | null>(null); // State to store medicine data
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const [errorModalVisible, setErrorModalVisible] = useState(false); // State to control error modal visibility
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isStatusBarVisible, setStatusBarVisible] = useState(false); // State to control StatusBar visibility

  // Function to fetch medicine data from API
  const fetchMedicine = useCallback(async (name: string) => {
    try {
      setIsLoading(true); // Set loading state to true
      // Fetch medicine data using the provided name
      const { data } = await getMedicines.get<MedicineApiResponse[]>(`/api/medicamentos/buscar/${name}`);
      if (data && Array.isArray(data) && data.length > 0) { // Check if data is valid
        const medicineData = data[0]; // Get the first result

        // Map API response to the Medicine type
        const mappedMedicine: Medicine = {
          nome: medicineData.nome,
          principio_ativo: medicineData.principioAtivo,
          bula: mapBulaData(medicineData.bula, medicineData.nome),
        };
        setMedicine(mappedMedicine); // Update state with mapped data
      } else {
        setMedicine(null); // Clear medicine state
        setErrorModalVisible(true); // Show error modal
        setErrorMessage('Medicamento não encontrado.'); // Set error message
      }
    } catch (error) {
      console.error('Error fetching medicine:', error); // Log error
      setMedicine(null); // Clear medicine state
      setErrorModalVisible(true); // Show error modal
      setErrorMessage('Erro ao carregar os dados. Verifique sua conexão e tente novamente.'); // Set error message
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  }, []);

  // Effect to fetch medicine data when component mounts or params.name changes
  useEffect(() => {
    if (params.name) { // Check if name parameter exists
      const encodedName = encodeURIComponent(params.name); // Encode name for URL safety
      fetchMedicine(encodedName); // Fetch medicine data
    } else {
      setIsLoading(false); // Stop loading
      setErrorModalVisible(true); // Show error modal
      setErrorMessage('Nome do medicamento não fornecido.'); // Set error message
    }
  }, [params.name, fetchMedicine]); // Dependencies for the effect

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[600]} hidden={isStatusBarVisible}/>
      {isLoading ? ( // Show loading indicator while fetching data
        <View style={s.loadingContainer}>
          <ActivityIndicator size="large" color={colors.green.base} />
        </View>
        ) : medicine ? ( // Render medicine details if data is available
          <>
            {/* Top bar with back navigation */}
            <TopBar>
              <TopBar.ChevronIcon
                onPress={() => navigation.goBack()} // Navigate back on press
              />
            </TopBar>
            <View style={s.container}>
              <ImageBackground
                source={images.searchPanelBg}
                resizeMode="cover"
                imageStyle={{ borderRadius: 10 }}
                style={s.imageBg}
              >
                <View style={s.header}>
                  {/* Medicine name */}
                  <Text
                    style={s.title}
                    accessible
                    accessibilityLabel={`Nome do medicamento: ${medicine.nome}`}
                  >
                    {medicine.nome.toUpperCase()} {/* Display medicine name in uppercase */}
                  </Text>
                  {/* Active ingredient */}
                  <Text style={s.subtitle}>{medicine.principio_ativo}</Text>
                </View>
              </ImageBackground>
              {/* Bula component to display medicine information */}
              <Bula bula={medicine.bula} />
            </View>
          </>
        ) : (
          // Show error modal if no medicine data
          <ErrorModal
            visible={errorModalVisible}
            onClose={() => {
              router.back(); // Já está correto, mas verifique o contexto
              setErrorModalVisible(false);
            }}
            title="Medicamento não encontrado"
            message="Ainda não consta em nossa base de dados" 
          />
        )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    marginBottom: 16,
    marginTop: 64,
  },
  header: {
    backgroundColor: 'rgba(37, 127, 73, 0.9)',
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[100],
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
  },
});