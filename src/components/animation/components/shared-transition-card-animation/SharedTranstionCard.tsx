import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import { useTheme } from "@/src/styles";
import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SharedTranstionCard = () => {
  const { theme } = useTheme();

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    padding: 10,
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withTiming(0.96, { duration: 200 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 200 });
  };

  const handleNavigate = () => {
    router.push("/portfolio");
  };

  return (
    <AnimatedPressable
      onPress={handleNavigate}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[animatedStyle]}
      sharedTransitionTag="sharedTag"
    >
      <Card
        // activeOpacity={0.6}
        disabled={true}
        style={[{ gap: 5 }]}
        borderRadius={theme.spacing.spacing[4]}
      >
        <View style={[{ marginBottom: 50, gap: 10 }]}>
          <CustomText size={11} color={theme.colors.palette.defaultFadeText}>
            PLAN WITH AI
          </CustomText>
          <CustomText variant={"h4"}>Real-time Analysis with AI.</CustomText>
          <CustomText variant={"body1"}>
            Instant insight from Alice, your AI-Powered financial assistant.
          </CustomText>
        </View>
      </Card>
    </AnimatedPressable>
  );
};

export default SharedTranstionCard;
