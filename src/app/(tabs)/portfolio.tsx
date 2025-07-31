import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import GenericButton from "@/src/components/common-components/GenericButton";
import { Theme, useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Cards = [
  {
    id: 0,
    title: "Retirement Planning",
    description:
      "Create a comprehensive retirement strategy based on your current savings and future gols",
  },
  {
    id: 1,
    title: "Retirement Planning",
    description:
      "Create a comprehensive retirement strategy based on your current savings and future gols",
  },
  {
    id: 2,
    title: "Retirement Planning",
    description:
      "Create a comprehensive retirement strategy based on your current savings and future gols",
  },
];

const portfolio = () => {
  const { theme } = useTheme();
  const styles = { ...useGlobalStyles(), ...customStyles(theme) };
  return (
    // <BlurView tint={"dark"} style={[styles.container]} intensity={100}>
    <Pressable
      style={[{ flex: 1, alignItems: "center", justifyContent: "center" }]}
      onPress={() => {
        router.back();
      }}
    >
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <AnimatedPressable sharedTransitionTag="sharedTag">
          <Card
            onPress={() => {
              // router.navigate("/portfolio");
            }}
            style={[{ gap: 5 }]}
            borderRadius={theme.spacing.spacing[4]}
            backgroundColor={theme.colors.palette.sharedElementCardBg}
          >
            <View style={[{ marginBottom: 50, gap: 10 }]}>
              <CustomText
                size={11}
                color={theme.colors.palette.defaultFadeText}
              >
                PLAN WITH AI
              </CustomText>
              <CustomText variant={"h4"}>
                Real-time Analysis with AI.
              </CustomText>
              <CustomText variant={"body1"}>
                Instant insight from Alice, your AI-Powered financial assistant.
              </CustomText>
            </View>
            <Animated.ScrollView
              entering={FadeInUp.duration(400).delay(500)}
              horizontal
            >
              {Cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    style={[
                      {
                        gap: 5,
                        marginRight: 10,
                        width: 280,
                        paddingHorizontal: 15,
                      },
                    ]}
                    borderRadius={theme.spacing.spacing[4]}
                    padding={10}
                  >
                    <CustomText size={14} variant="h4">
                      {card.title}
                    </CustomText>
                    <CustomText
                      size={12}
                      textBreakStrategy={"highQuality"}
                      style={{ textAlign: "left" }}
                      color={theme.colors.palette.defaultHighFadeText}
                      variant={"h4"}
                    >
                      {card.description}
                    </CustomText>
                    <GenericButton title="Review" onPress={() => {}} />
                  </Card>
                );
              })}
            </Animated.ScrollView>
          </Card>
        </AnimatedPressable>
      </View>
    </Pressable>
    // </BlurView>
  );
};

export default portfolio;

const customStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "red",
    },
  });
