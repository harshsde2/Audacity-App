// src/components/PageStack.tsx
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

const screens = ["Home", "Chat", "Portfolio"];
const { width } = Dimensions.get("window");

const PageStack = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <View style={styles.container}>
      {/* Top Title */}
      <Text style={styles.title}>{screens[pageIndex]}</Text>
      {/* Dots Indicator */}
      <View style={styles.dots}>
        {screens.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, { opacity: i === pageIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>

      {/* Pages */}
      <PagerView
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
      >
        {screens.map((screen, index) => (
          <View key={index} style={styles.page}>
            <Text style={styles.pageText}>{screen} Screen</Text>
          </View>
        ))}
      </PagerView>

      {/* Persistent AI Input */}
      <View style={styles.aiInput}>
        <Text style={{ color: "white" }}>🤖 Ask AI</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "transparent" },
  title: {
    color: "#F9F1E1",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  pager: { flex: 1 },
  page: { width, justifyContent: "center", alignItems: "center" },
  pageText: { color: "#fff", fontSize: 20 },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#F9F1E1",
    borderRadius: 4,
  },
  aiInput: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    padding: 14,
    backgroundColor: "#292929",
    borderRadius: 30,
    alignItems: "center",
  },
});

export default PageStack;
