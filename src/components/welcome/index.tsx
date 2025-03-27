import { s } from './styles';

import { Image, Text, View, Dimensions } from 'react-native';

export function Welcome() {
  return (
    <View style={s.container}>
      <Image source={require('@/assets/logo.png')} style={s.logo} />

      <Text style={s.title}>
        {Dimensions.get('window').width < 360 ? 'Bem vindo\nao medicalize!' : 'Bem vindo ao medicalize!'}
      </Text>

      <Text style={s.subtite}>
        Informações sobre medicamentos {"\n"} de forma rápida e fácil
      </Text>
    </View>
  );
}
