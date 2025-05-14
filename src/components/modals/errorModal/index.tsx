import { ModalProps } from "@/types/modal.types";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { s } from "./styles";

type Props = ModalProps & {
  title: string;
  message: string;
}

export function ErrorModal({visible, onClose, title, message}: Props) {
  return (
    <Modal
        transparent={true} // Makes the modal background transparent
      visible={visible} // Controls the visibility of the modal based on the 'visible' prop
      animationType="slide" // Sets the animation type for modal appearance
    >
        <View style={s.container}>
            <View style={s.wrapper}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.message}>{message}</Text>
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