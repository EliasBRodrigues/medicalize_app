import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Welcome } from '@/components/welcome';
import { Button } from '@/components/button';

export default function Index() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 62, gap: 64, backgroundColor: '#FFF' }} >

      {/* Welcome component */}
      <Welcome />

      {/* Background image */}
      <Image 
        source={require('@/assets/mockup-index-bg.png')} 
        resizeMode="contain" 
        style={{ 
          backgroundColor: '#fefefe', 
          width: '100%', height: 500 
        }} 
      />

      {/* Gradient overlay at the bottom */}
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.0)', // Fully transparent at the top
          'rgba(255, 255, 255, 1)' // Fully white at the bottom
        ]}
        locations={[0.0, 0.2]} // Defines where the gradient transition occurs
        style={{
          height: '30%',
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          paddingHorizontal: 24, 
          paddingBottom: 40,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {/* "Start" button */}
        <Button>
          <Button.Title>Começar</Button.Title>
        </Button>
      </LinearGradient>
    </View>
  );
}
