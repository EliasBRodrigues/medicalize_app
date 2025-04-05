import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 36,
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gray[200],
    backgroundColor: colors.gray[100],
  },
  text: {
    flexGrow: 1,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    marginLeft: 4
  }
});
