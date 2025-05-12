import { fontFamily, colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.gray[100],

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  logoname: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.gray[600],
  },
});
