import { ModalProps } from "@/types/modal.types";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { s } from "./styles";

export function ErrorModal({visible, onClose}: ModalProps) {
  return (
    <Modal
        transparent={true} // Makes the modal background transparent
      visible={visible} // Controls the visibility of the modal based on the 'visible' prop
      animationType="slide" // Sets the animation type for modal appearance
    >
        <View style={s.container}>
            <View style={s.wrapper}>
                <Text style={s.title}>Erro ao processar imagem</Text>
                <Text style={s.message}>tente novamente em alguns instantes</Text>
                <View style={s.buttonContainer}>
                    <TouchableOpacity onPress={onClose} style={s.button}>
                        <Text style={s.buttonText}>Ok</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );

}