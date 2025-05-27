import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.gray[600],
  },
  filterList: {
    gap: 8,
  },
  filterItem: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[200],
    marginBottom: 8,
  },
  filterItemSelected: {
    backgroundColor: colors.gray[100],
    borderColor: colors.green.base,
  },
  filterItemText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[600],
  },
  filterItemTextSelected: {
    color: colors.green.base,
    fontFamily: fontFamily.bold,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  clearButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[200],
    marginRight: 8,
  },
  clearButtonText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[600],
  },
  applyButton: {
    flexGrow: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.green.base,
  },
  applyButtonText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[100],
    textAlign: 'center',
  },
});
