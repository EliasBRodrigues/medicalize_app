import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    marginBottom: 12,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.green.base,
    textAlign: 'center',
  },
  subtite: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[400],
    marginTop: 8,
    textAlign: 'center',
  },
});
