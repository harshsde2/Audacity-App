import { useAuth } from "@/src/context/AuthContext";
import { Stack } from "expo-router";
import React from "react";
import { enableScreens } from "react-native-screens";
enableScreens(true);

const DashboardLayout = () => {
  const auth = useAuth();
  console.log("auth in DashboardLayout =>", auth.isAuthenticated);
  return (
    <Stack screenOptions={{ headerShown: false, animation: "default" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(test)" options={{ headerShown: false }} />
      <Stack.Screen
        name="chat"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="portfolio"
        options={{
          headerShown: false,
          presentation: "containedTransparentModal",
          animation: "fade",
        }}
      />
    </Stack>
  );
};

export default DashboardLayout;
