import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 4,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  input: {
    flexGrow: 1,
    height: 'auto',
    marginLeft: 12,
    marginRight: 4,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  button: {
    width: 36,
    height: 36,
  },
});
