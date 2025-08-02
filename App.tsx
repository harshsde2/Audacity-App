// App.tsx
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider, useAuth } from "./src/context/AuthContext";
import { storage, STORAGE_KEYS } from "./src/lib/storage/storage";
import RootNavigator from "./src/naviagtion";
import { ThemeProvider } from "./src/styles";
// import RootNavigator from './src/navigation';

const AppContent: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Naveid: require("./src/assets/fonts/Naveid.otf"),
    NaveidExtraBold: require("./src/assets/fonts/Naveid-ExtraBold.otf"),
    NaveidThin: require("./src/assets/fonts/Naveid-Thin.otf"),
    NeueMontrealBold: require("./src/assets/fonts/NeueMontreal-Bold.otf"),
    NeueMontrealBoldItalic: require("./src/assets/fonts/NeueMontreal-BoldItalic.otf"),
    NeueMontrealItalic: require("./src/assets/fonts/NeueMontreal-Italic.otf"),
    NeueMontrealLight: require("./src/assets/fonts/NeueMontreal-Light.otf"),
    NeueMontrealLightItalic: require("./src/assets/fonts/NeueMontreal-LightItalic.otf"),
    NeueMontrealMedium: require("./src/assets/fonts/NeueMontreal-Medium.otf"),
    NeueMontrealMediumItalic: require("./src/assets/fonts/NeueMontreal-MediumItalic.otf"),
    NeueMontrealRegular: require("./src/assets/fonts/NeueMontreal-Regular.otf"),
  });

  const { signIn } = useAuth();

  useEffect(() => {
    loadUser();
    GoogleSignin.configure({
      webClientId:
        "35626446812-rb6ok6c70dnd1ocvlgtkeimh7ejlefpi.apps.googleusercontent.com",
      iosClientId:
        "35626446812-c6uvth81096k2htpl9r06pqtie8a5ec0.apps.googleusercontent.com",
      profileImageSize: 150,
    });
  }, []);

  const loadUser = async () => {
    try {
      const storedUser = await storage.get(STORAGE_KEYS.USER);
      if (storedUser) {
        signIn(storedUser);
      }
    } catch (e) {
      // ignore, will show login
    }
  };

  if (!fontsLoaded) return null; // or splash

  return <RootNavigator />;
};

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <NavigationContainer>
              <AppContent />
            </NavigationContainer>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
