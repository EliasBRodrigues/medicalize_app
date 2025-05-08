import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    flex: 1,
    /* padding: 16, */
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.98)',
  },
  image: {
    flexGrow: 1,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});
