import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    flexGrow: 1,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    marginLeft: 4,
  },
});
