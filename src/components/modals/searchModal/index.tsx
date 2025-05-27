import { Button } from '@/components/button';
import { History } from '@/components/history';
import { SearchBar } from '@/components/searchBar';
import { TopBar } from '@/components/topBar';
import { colors } from '@/styles/theme';
import { ModalProps } from '@/types/modal.types';
import { SearchBarProps } from '@/types/searchBar.types';
import { IconCamera } from '@tabler/icons-react-native';
import { useCallback, useEffect, useState } from 'react';
import { s } from './styles';
import {
  Modal,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { navigateToMedicine } from '@/utils/navigationUtils';
import {
  saveSearchQuery,
  getSearchHistory,
} from '@/storage/searchHistoryStorage';

// Tipo para cada item da constante DATA
type Item = {
  id: string;
  title: string;
};

// Tipo Props combinando ModalProps, SearchBarProps e a nova prop data
type Props = ModalProps &
  SearchBarProps & {
    handleSearch: () => void;
  };

export function SearchModal({
  visible,
  onClose,
  value,
  onChangeText,
  handleSearch,
}: Props) {
  // State to manage camera button visibility based on scroll position
  const [showCameraButton, setShowCameraButton] = useState(true);
  const [searchHistory, setSearchHistory] = useState<Item[]>([]); // State to manage search history

  // Function to load search history from AsyncStorage
  const loadSearchHistory = useCallback(async () => {
    const history = await getSearchHistory();
    // Transform string array to Item array
    const formattedHistory: Item[] = history.map(
      (title: string, index: number) => ({
        id: String(index + 1), // Generate a unique ID
        title,
      })
    );
    setSearchHistory(formattedHistory);
  }, []);

  // Load search history when modal becomes visible
  useEffect(() => {
    if (visible) {
      loadSearchHistory();
    }
  }, [visible, loadSearchHistory]);

  // Filtered data based on search input
  const filteredData = searchHistory.filter((item) =>
    item?.title?.toLowerCase?.().includes(value?.toLowerCase?.() || '')
  );

  // function to show/hide the camera button based on scroll position
  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollY = event.nativeEvent.contentOffset.y;
    setShowCameraButton(scrollY === 0); // Show button only when at the top of the list
  }

  const onSearch = () => {
    if (value) {
      saveSearchQuery(value); // Salva a consulta de pesquisa
      handleSearch();
    }
  };

  const onItemPress = (text: string) => {
    saveSearchQuery(text); // Salva o item selecionado
    navigateToMedicine(text);
  };

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
          onSubmitEditing={onSearch}
        />

        <History
          data={filteredData}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onItemPress={onItemPress}
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
