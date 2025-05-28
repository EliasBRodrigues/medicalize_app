import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  containerImgs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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
