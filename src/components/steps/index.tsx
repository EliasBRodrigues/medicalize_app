import { s } from './styles';

import { Text, View } from 'react-native';
import { Step } from '../step';
import {
  IconCamera,
  IconLayersDifference,
  IconList,
} from '@tabler/icons-react-native';

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <Step
        icon={IconCamera}
        title="Pesquise medicamentos"
        description="Tire uma foto ou digite o nome e encontre informações sobre medicamentos"
      />

      <Step
        icon={IconLayersDifference}
        title="Verifique interações"
        description="Digite o nome dos medicamentos e descubra possíveis interações"
      />

      <Step
        icon={IconList}
        title="Acesse com rapidez"
        description="Acesse o histórico para refazer pesquisas e ver informações anteriores"
      />
    </View>
  );
}
