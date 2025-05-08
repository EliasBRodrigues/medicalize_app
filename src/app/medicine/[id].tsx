import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Bula from '@/components/medicine/bula';
import { medicines } from '@/data_test/medicines';
import { TopBar } from '@/components/topBar';
import { fontFamily, colors } from '@/styles/theme';
import { useNavigation } from '@react-navigation/native';

export default function Medicine() {
  const params = useLocalSearchParams<{ id: string }>();
  const medicine = medicines.find((med) => med.id === params.id);

  const navigation = useNavigation();

  if (!medicine) {
    return (
      <View style={s.container}>
        <Text>Medicamento não encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <TopBar>
        <TopBar.ChevronIcon onPress={() => navigation.goBack()} />
      </TopBar>

      <View style={s.container}>
        <ImageBackground
          source={require('@/assets/search-panel_bg.png')}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10 }}
          style={s.imageBg}
        >
          <View style={s.header}>
            <Text style={s.title}>{medicine.nome.toUpperCase()}</Text>
            <Text style={s.subtitle}>{medicine.principio_ativo}</Text>
          </View>
        </ImageBackground>

        <Bula bula={medicine.bula} />
      </View>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
