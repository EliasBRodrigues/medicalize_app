import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 28,
    paddingBottom: 8,
  },
  list: {
    borderRadius: 10,
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  emptyHistory: {
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[200],
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  itemContainerNoBorder: {
    borderBottomWidth: 0, // Sem borda para o último item
  },
});
