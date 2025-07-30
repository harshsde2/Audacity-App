import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

export default function GradientExample() {
  return (
    <LinearGradient
      colors={["#FF6B6B", "#FFD93D"]} // from red to yellow
      start={{ x: 0, y: 0 }} // top-left
      end={{ x: 1, y: 1 }} // bottom-right
      style={styles.container}
    >
      <Text style={styles.text}>Gradient Background</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // full screen
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
