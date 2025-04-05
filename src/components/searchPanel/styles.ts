import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.green.base,
    padding: 16,
    gap: 24,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Faz o overlay ocupar todo o espaço do pai
    backgroundColor: "rgba(37, 127, 73, 0.9)", // Verde com 50% de opacidade
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.green.base
  },
  texts: {
    gap: 8
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: "#FFFFFF"
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: "#FFFFFF"
  }
});
