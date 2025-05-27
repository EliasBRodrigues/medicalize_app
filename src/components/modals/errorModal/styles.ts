import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
  },
  button: {
    backgroundColor: 'transparent',
    color: colors.gray[600],
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
});
