import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 12,
    paddingBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.gray[600],
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  filterButtonText: {
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
    fontSize: 14,
  },
});
