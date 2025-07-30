import { useAuth } from "@/src/context/AuthContext";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  const auth = useAuth();
  // console.log("auth in AuthLayout =>", auth.isAuthenticated);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
