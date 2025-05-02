import { Image, Modal, View, StyleSheet } from 'react-native';
import { Button } from '@/components/button';
import { ModalProps } from '@/types/modal.types';
import { IconX } from '@tabler/icons-react-native';
import { colors } from '@/styles/theme';
import { CameraButton } from '@/components/cameraButton';
import { s } from './styles';
import { router } from 'expo-router';

type Props = ModalProps & {
  photoUri: string;
};

export function PhotoModal({ visible, onClose, photoUri }: Props) {
  return (
    <Modal style={s.modal} animationType="fade" visible={visible} transparent>
      <View style={s.container}>
        <CameraButton onPress={onClose} style={{ marginLeft: 'auto' }}>
          <CameraButton.Icon icon={IconX} color={colors.gray[100]} />
        </CameraButton>

        <Image
          source={{ uri: photoUri }}
          style={s.image}
          resizeMode="contain"
        />

        <Button style={{ marginTop: 'auto' }} 
            onPress={() => router.navigate({
              pathname: '/medicine/[id]',
              params: { id: '21321432rcewe2' },
          })}>
          <Button.Title>Continuar</Button.Title>
        </Button>
      </View>
    </Modal>
  );
}
