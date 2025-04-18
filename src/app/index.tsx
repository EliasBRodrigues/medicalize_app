// src/app/index.js
import { View, Image, ActivityIndicator, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Welcome } from '@/components/welcome';
import { Button } from '@/components/button';
import { useRouter } from 'expo-router';
import { markAsAccessed, checkFirstAccess } from '@/storage/firstAccessStorage';
import { useEffect, useState } from 'react';
import { colors } from '@/styles/colors';
import { useCameraPermission } from 'react-native-vision-camera';

export default function Index() {
  // Initialize router for navigation
  const router = useRouter();

  // State to manage button text
  const [textButton, setTextButton] = useState<string | null>(null);

  // Request camera permissions
  const { requestPermission } = useCameraPermission();

  // Effect to handle first access check
  useEffect(() => {
    async function checkAccess() {
      try {
        // Check if this is the user's first access
        const isFirstAccess = await checkFirstAccess();

        if (isFirstAccess) {
          // Set button text for first access
          setTextButton('Começar');
          // Mark app as accessed in storage
          await markAsAccessed();
        } else {
          // Set button text for returning users
          setTextButton('Entrar');
        }
      } catch (error) {
        console.error('Erro ao lidar com o primeiro acesso:', error);
        Alert.alert(
          'Erro',
          'Não foi possível carregar as configurações. Tente novamente.'
        );
        // Set button text for retry
        setTextButton('Tentar novamente');
      }
    }
    checkAccess(); // Run access check
  }, []); // Empty dependency array ensures this runs only once

  async function handleButtonPress() {
    try {
      const granted = await requestPermission(); // Request camera permissions
      if (!granted) {
        return Alert.alert(
          'Câmera',
          'Precisamos da sua permissão para acessar a câmera.'
        ); // Alert if permission is denied
      }

      router.replace('/home'); // Navigate to home screen
    } catch (error) {
      console.log(error);
      Alert.alert('Câmera', 'Não foi possível acessar a câmera.'); // Alert if there's an error
    }
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 62,
        gap: 64,
        backgroundColor: '#FFF',
      }}
    >
      {/* Welcome component */}
      <Welcome />

      {/* Background image */}
      <Image
        source={require('@/assets/mockup-index-bg.png')}
        resizeMode="contain"
        style={{
          backgroundColor: '#fefefe',
          width: '100%',
          height: 500,
        }}
      />

      {/* Gradient overlay at the bottom */}
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 1)']}
        locations={[0.0, 0.2]}
        style={{
          height: '30%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 24,
          paddingBottom: 40,
          justifyContent: 'flex-end',
        }}
      >
        {/* Button to navigate to home screen */}
        <Button onPress={handleButtonPress}>
          {textButton === null ? (
            // Show loading indicator while text is not set
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            // Display button text
            <Button.Title>{textButton}</Button.Title>
          )}
        </Button>
      </LinearGradient>
    </View>
  );
}
