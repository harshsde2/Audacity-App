import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { storage, STORAGE_KEYS } from "../lib/storage/storage";
import { ThemeProvider } from "../styles";

const AppContent: React.FC = () => {
  const [fontsLoaded] = useFonts({
    // Naveid
    Naveid: require("@/src/assets/fonts/Naveid.otf"),
    NaveidExtraBold: require("@/src/assets/fonts/Naveid-ExtraBold.otf"),
    NaveidThin: require("@/src/assets/fonts/Naveid-Thin.otf"),

    // Neue Montreal family
    NeueMontrealBold: require("@/src/assets/fonts/NeueMontreal-Bold.otf"),
    NeueMontrealBoldItalic: require("@/src/assets/fonts/NeueMontreal-BoldItalic.otf"),
    NeueMontrealItalic: require("@/src/assets/fonts/NeueMontreal-Italic.otf"),
    NeueMontrealLight: require("@/src/assets/fonts/NeueMontreal-Light.otf"),
    NeueMontrealLightItalic: require("@/src/assets/fonts/NeueMontreal-LightItalic.otf"),
    NeueMontrealMedium: require("@/src/assets/fonts/NeueMontreal-Medium.otf"),
    NeueMontrealMediumItalic: require("@/src/assets/fonts/NeueMontreal-MediumItalic.otf"),
    NeueMontrealRegular: require("@/src/assets/fonts/NeueMontreal-Regular.otf"),
  });
  const { signIn, showLoader, hideLoader } = useAuth();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      // showLoader();
      const storedUser = await storage.get(STORAGE_KEYS.USER);
      if (storedUser) {
        signIn(storedUser);
      } else {
        router.replace("/(auth)/login");
      }
    } catch (error) {
      router.replace("/(auth)/login");
    } finally {
      // hideLoader();
    }
  };

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"(auth)"} options={{ headerShown: false }} />
      <Stack.Screen name={"(tabs)"} options={{ headerShown: false }} />
    </Stack>
  );
};

const RootlLayout = () => {
  // console.log("root layout");

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootlLayout;
