import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 200,
    height: 300,
    marginHorizontal: 'auto',
    marginTop: 48,
    marginBottom: 'auto',
  },
  list: {
    marginTop: 24,
    gap: 12,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colors.green.base,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
