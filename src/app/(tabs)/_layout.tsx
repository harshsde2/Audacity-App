import { useAuth } from "@/src/context/AuthContext";
import { Stack } from "expo-router";
import React from "react";

const DashboardLayout = () => {
  const auth = useAuth();
  console.log("auth in DashboardLayout =>", auth.isAuthenticated);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="chat" options={{ headerShown: false }} />
      <Stack.Screen name="portfolio" options={{ headerShown: false }} />
    </Stack>
  );
};

export default DashboardLayout;
