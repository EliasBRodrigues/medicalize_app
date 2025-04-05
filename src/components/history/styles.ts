import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  list: {
    gap: 8,
    marginBottom: 16,
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  emptyHistory: {
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[200]
  }
});
