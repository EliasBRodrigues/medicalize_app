// src/app/_layout.tsx
import { Stack } from 'expo-router';
import { colors } from '@/styles/theme';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_500Medium,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { Loading } from '@/components/loading';

export default function Layout() {
  // Load Open Sans fonts with different weights
  const [fontsLoaded, fontError] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });

  // Show loading screen while fonts are not loaded
  if (!fontsLoaded) {
    return <Loading />;
  }

  // Render navigation stack once fonts are loaded
  return (
    <Stack
      screenOptions={{
        // Hide header for all screens
        headerShown: false,
        // Set background color for all screens
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  );
}
