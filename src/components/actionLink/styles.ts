import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
