import { s } from './styles';

import { Image, Text, View } from 'react-native';

export function Welcome() {
  return (
    <View>
      <Image source={require('@/assets/logo.png')} style={s.logo} />

      <Text style={s.title}>Bem vindo ao medicalize!</Text>

      <Text style={s.subtite}>
        Encontre informações sobre medicamentos de forma rápida e fácil
      </Text>
    </View>
  );
}
