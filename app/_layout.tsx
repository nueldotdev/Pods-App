import { DefaultTheme, DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from '@/constants/theme';
import { useColorScheme, StatusBar as RNStatusBar } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  const theme = colorScheme === 'dark' 
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: Colors.dark.background,
          card: Colors.dark.background,
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Colors.light.background,
          card: Colors.light.background,
        },
      };

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" translucent={false} />
      <RNStatusBar backgroundColor={Colors[colorScheme ?? 'light'].background} translucent={true} />
    </ThemeProvider>
  );
}
