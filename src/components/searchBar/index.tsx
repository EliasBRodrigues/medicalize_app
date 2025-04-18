import { TextInput, View } from 'react-native';
import { Search } from 'lucide-react-native';
import { IconLineScan } from '@tabler/icons-react-native';
import { colors } from '@/styles/colors';
import { s } from './styles';
import { SearchBarProps } from '@/types/searchBar.types';

export function SearchBar({
  value, // The current value of the input
  onChangeText, // Callback function to handle text changes
  placeholder, // Placeholder text for the input
}: SearchBarProps) {
  return (
    <View style={s.container}>
      {/* Search icon displayed on the left */}
      <Search size={20} color={colors.gray[400]} />

      <TextInput
        style={s.input}
        value={value} // Controlled input value
        onChangeText={onChangeText} // Updates value on text change
        placeholder={placeholder} // Placeholder text when input is empty
        placeholderTextColor={colors.gray[400]} // Light gray color for placeholder
      />
    </View>
  );
}
