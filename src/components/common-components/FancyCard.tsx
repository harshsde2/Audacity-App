import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function FancyCard() {
  return (
    <LinearGradient
      className="rounded-xl p-4"
      colors={["#34D399", "#3B82F6"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text className="text-white text-lg font-semibold">AI Assistant</Text>
    </LinearGradient>
  );
}
