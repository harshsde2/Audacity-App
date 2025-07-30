import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const router = useRouter();
  const auth = useAuth();

  // console.log("auth in login =>", auth.isAuthenticated);

  const handleLogin = () => {
    auth.signIn({ email: "harshpal@gmail.com", name: "harsh" });
    // Later, you'll implement Google Auth here
    router.replace("/(tabs)"); // After login, go to home screen
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24 }}>Login Screen</Text>
      <Button title="Sign in with Google" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default LoginScreen;
