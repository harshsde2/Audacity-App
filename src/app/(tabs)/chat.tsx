import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";

const chat = () => {
  return (
    <Animated.View
      sharedTransitionTag="sharedCard"
      onTouchEnd={() => router.back()}
      style={{
        marginTop: 100,
        width: 350,
        height: 350,
        borderRadius: 16,
        backgroundColor: "#4CAF50",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 22 }}>Tap to go back</Text>
    </Animated.View>
  );
};

export default chat;
