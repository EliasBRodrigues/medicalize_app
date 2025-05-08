export type ModalProps = {
  visible: boolean; // A boolean prop to control whether the modal is shown or hidden
  onClose?: () => void; // A callback function with no arguments and no return value, used to handle the modal's close action
};
