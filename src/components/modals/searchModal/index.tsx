import { Button } from '@/components/button';
import { History } from '@/components/history';
import { SearchBar } from '@/components/searchBar';
import { TopBar } from '@/components/topBar';
import { colors } from '@/styles/theme';
import { ModalProps } from '@/types/modal.types';
import { SearchBarProps } from '@/types/searchBar.types';
import { IconCamera } from '@tabler/icons-react-native';
import { useState } from 'react';
import { s } from './styles';
import {
  Modal,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { navigateToMedicine } from '@/utils/navigationUtils';

// Tipo para cada item da constante DATA
type Item = {
  id: string;
  title: string;
};

// Tipo Props combinando ModalProps, SearchBarProps e a nova prop data
type Props = ModalProps &
  SearchBarProps & {
    data: Item[];
    handleSearch: () => void;
  };

export function SearchModal({
  visible,
  onClose,
  value,
  onChangeText,
  data,
  handleSearch
}: Props) {
  // State to manage camera button visibility based on scroll position
  const [showCameraButton, setShowCameraButton] = useState(true);

  // Filtered data based on search input
  const filteredData = data.filter((item) =>
    item?.title?.toLowerCase?.().includes(value?.toLowerCase?.() || '')
  );

  // function to show/hide the camera button based on scroll position
  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollY = event.nativeEvent.contentOffset.y;
    setShowCameraButton(scrollY === 0); // Show button only when at the top of the list
  }

  return (
    <Modal style={s.container} visible={visible} animationType="slide">
      <TopBar>
        <TopBar.LogoName />
      </TopBar>

      <View style={s.wrapper}>
        <SearchBar
          value={value}
          onChangeText={onChangeText}
          placeholder="Buscar medicamento"
          onSubmitEditing={handleSearch}
        />

        <History
          data={filteredData}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onItemPress={(text: string) => {
            navigateToMedicine(text); // Navigate to the medicine details page
            }
          }
        />
        {showCameraButton && (
          <Button style={s.button} onPress={onClose}>
            <Button.Icon icon={IconCamera} color={colors.gray[100]} size={24} />
          </Button>
        )}
      </View>
    </Modal>
  );
}
