// src/navigation/AppStack.tsx
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Dashboard from "../screens/dashboard/Dashboard";
import Portfolio from "../screens/dashboard/Portfolio";

export type RootStackParamList = {
  Home: undefined;
  Detail: { item: any };
  Portfolio: undefined;
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "transparentModal",
      cardStyle: { backgroundColor: "transparent" },
      cardOverlayEnabled: true,
      cardStyleInterpolator: () => ({
        cardStyle: {
          opacity: 1,
        },
      }),
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Portfolio" component={Portfolio} />
  </Stack.Navigator>
);

export default AppStack;
