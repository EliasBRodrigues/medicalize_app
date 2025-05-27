import React, { useState } from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { IconXboxX } from '@tabler/icons-react-native';
import { colors, fontFamily } from '@/styles/theme';
import { ModalProps } from '@/types/modal.types';
import { s } from './styles';

type leafletItem = {
  title: string;
};

type LeafletModalProps = ModalProps & {
  leafletItems: leafletItem[];
  selectedFilters: string[];
  toggleFilter: (title: string) => void;
  clearFilters: () => void;
  applyFilters: () => void;
};

export function LeafletModal({
  leafletItems,
  selectedFilters,
  toggleFilter,
  clearFilters,
  applyFilters,
  visible,
  onClose,
}: LeafletModalProps) {
  return (
    <Modal
      visible={visible} // Controls modal visibility
      transparent={true} // Makes modal background transparent
      animationType="fade" // Slide animation for modal appearance
    >
      <View style={s.modalContainer}>
        <View style={s.modalContent}>
          <View style={s.modalHeader}>
            <Text style={s.modalTitle}>Selecionar Tópicos</Text>
            <IconXboxX size={24} color={colors.gray[600]} onPress={onClose} />
          </View>
          <FlatList
            data={leafletItems} // Data source for filter items
            renderItem={({ item }) => (
              // Touchable item for each filter
              <TouchableOpacity
                style={[
                  s.filterItem, // Base style for filter item
                  selectedFilters.includes(item.title) && s.filterItemSelected, // Conditional style for selected state
                ]}
                onPress={() => toggleFilter(item.title)} // Toggles filter selection
              >
                <Text
                  style={[
                    s.filterItemText, // Base text style
                    selectedFilters.includes(item.title) &&
                      s.filterItemTextSelected, // Conditional style for selected text
                  ]}
                >
                  {item.title} {/* Filter item title */}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title} // Unique key for each item
            contentContainerStyle={s.filterList} // Styling for the list container
            showsVerticalScrollIndicator={false} // Hides vertical scroll indicator
          />
          {/* Container for action buttons */}
          <View style={s.buttonContainer}>
            {/* Button to clear all filters */}
            <TouchableOpacity style={s.clearButton} onPress={clearFilters}>
              <Text style={s.clearButtonText}>Limpar</Text>{' '}
              {/* Clear button text */}
            </TouchableOpacity>
            {/* Button to apply selected filters */}
            <TouchableOpacity style={s.applyButton} onPress={applyFilters}>
              <Text style={s.applyButtonText}>Aplicar</Text>{' '}
              {/* Apply button text */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
