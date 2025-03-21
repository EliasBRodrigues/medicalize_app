import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginBottom: 36,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.gray[500],
  },
  subtite: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[400],
    marginTop: 8,
  },
});
