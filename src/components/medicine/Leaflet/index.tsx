import { colors, fontFamily } from '@/styles/theme';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { LeafletItem } from '@/components/medicine/leafletItem';
import { BulaProps } from '@/types/medicine.types';
import { s } from './styles';
import { IconFilter } from '@tabler/icons-react-native';
import { useState } from 'react';
import { LeafletModal } from '@/components/modals/leafletModal';

export default function Leaflet({ bula }: BulaProps) {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // State to store selected filter titles

  // Transform bula object into an array of {title, description} objects for FlatList
  const leafletItem = Object.entries(bula).map(([title, { Descrição }]) => ({
    title,
    description: Descrição,
  }));

  // Filter bula items based on selected filters; show all if no filters are applied
  const filteredLeafletItems =
    selectedFilters.length === 0
      ? leafletItem
      : leafletItem.filter((item) => selectedFilters.includes(item.title));

  // Toggle filter selection: add or remove title from selectedFilters
  const toggleFilter = (title: string) => {
    setSelectedFilters((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  // Apply filters and close modal
  const applyFilters = () => {
    setIsModalVisible(false);
  };

  // Clear all selected filters
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <View style={s.container}>
      <FlatList
        data={filteredLeafletItems} // Data source for the list
        renderItem={({ item }) => <LeafletItem item={item} />} // Render each item using leafletItem component
        keyExtractor={(item) => item.title} // Unique key for each item
        contentContainerStyle={s.list} // Styling for the list container
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        ListHeaderComponent={() => (
          // Header with filter button
          <View style={s.header}>
            <TouchableOpacity
              style={s.filterButton}
              onPress={() => setIsModalVisible(true)}
            >
              <IconFilter size={20} color={colors.gray[600]} />
              <Text style={s.filterButtonText}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal for selecting filters */}
      <LeafletModal
        leafletItems={leafletItem} // Pass all bula items to modal
        selectedFilters={selectedFilters} // Pass current selected filters
        toggleFilter={toggleFilter} // Function to toggle filter selection
        clearFilters={clearFilters} // Function to clear all filters
        applyFilters={applyFilters} // Function to apply filters and close modal
        visible={isModalVisible} // Control modal visibility
        onClose={() => setIsModalVisible(false)} // Close modal callback
      />
    </View>
  );
}
