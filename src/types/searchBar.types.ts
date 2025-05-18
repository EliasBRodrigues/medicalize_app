export type SearchBarProps = {
  value: string; // The value of the input field
  onChangeText: (text: string) => void; // Callback function to handle text input changes
  placeholder?: string; // Optional placeholder text
  onSubmitEditing?: () => void; // Optional callback function to handle submit events
};
