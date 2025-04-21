import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  wrapper: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: colors.gray[100],
    marginTop: 60,
  },
  button: {
    position: 'absolute',
    bottom: 32,
    right: 16,
    width: 48,
  },
});
