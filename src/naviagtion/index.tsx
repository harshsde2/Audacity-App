// src/navigation/index.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppStack /> : <AuthStack />;
};

export default RootNavigator;
