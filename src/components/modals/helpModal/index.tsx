import { Image, Modal, Text, View } from 'react-native';
import { s } from './styles';
import { Button } from '@/components/button';
import { ModalProps } from '@/types/modal.types';

export function HelpModal({ visible, onClose }: ModalProps) {
  return (
    // visible prop controls whether the modal is shown or hidden
    // animationType="fade" makes the modal appear with a fade-in effect
    <Modal
      style={{ flex: 1, justifyContent: 'flex-start' }}
      visible={visible}
      animationType="slide"
    >
      <View style={s.container}>
        <View style={s.list}>
          <Text style={s.text}>Centralize a embalagem na câmera.</Text>
          <Text style={s.text}>Tire a foto a uma distância adequada.</Text>
          <Text style={s.text}>Use fundo neutro e boa iluminação.</Text>
        </View>
        <Image
          source={require('@/assets/landscape-placeholder.png')}
          style={s.image}
        />
        <Button onPress={onClose}>
          <Button.Title>Continuar</Button.Title>
        </Button>
      </View>
    </Modal>
  );
}
