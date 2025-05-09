import { Image, Modal, View, ActivityIndicator } from 'react-native';
import { ModalProps } from '@/types/modal.types';
import { colors } from '@/styles/theme';
import { s } from './styles';

// Define the Props type, extending ModalProps and adding photoUri
type Props = ModalProps & {
  photoUri: string; // URI of the photo to be displayed
};


export function PhotoModal({ visible, onClose, photoUri }: Props) {
  return (
    <Modal style={s.modal} animationType="fade" visible={visible} transparent>
      {/* Container View for the image */}
      <View style={s.container}>
        {/* Image component displaying the photo from photoUri */}
        <Image
          source={{ uri: photoUri }} // Source of the image
          style={s.image} // Styling for the image
          resizeMode="cover" // Image scaling mode to cover the container
        />
      </View>
      {/* Overlay View displaying a loading indicator */}
      <View style={s.overlay}>
        {/* ActivityIndicator for loading state, with large size and green color */}
        <ActivityIndicator size={'large'} color={colors.green.base} />
      </View>
    </Modal>
  );
}