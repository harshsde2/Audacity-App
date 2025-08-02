import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import { useTheme } from "@/src/styles";
import { CardLayout } from "@/src/types";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useRef } from "react";
import { InteractionManager, Pressable, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface SharedTransitionCardProps {
  index?: number;
  onPress?: (layout: CardLayout) => void;
}

const SharedTransitionCard: FC<SharedTransitionCardProps> = ({
  index,
  onPress,
}) => {
  const cardRef = useRef<any>(null);
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  // Animation values
  const scale = useSharedValue(1);
  const pressScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value * pressScale.value }],
  }));

  const handlePressIn = () => {
    pressScale.value = withSpring(0.98, {
      damping: 15,
      stiffness: 300,
    });
  };

  const handlePressOut = () => {
    pressScale.value = withSpring(1, {
      damping: 15,
      stiffness: 300,
    });
  };

  const performNavigation = (layout: CardLayout) => {
    // Use InteractionManager to ensure smooth transition
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate("Portfolio", {
        cardLayout: layout,
      });
    });
  };

  const handleNavigate = () => {
    // Immediate scale up effect
    scale.value = withSpring(1.02, {
      damping: 20,
      stiffness: 300,
    });

    cardRef.current?.measure(
      (x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        const layout: CardLayout = {
          x: pageX,
          y: pageY,
          width,
          height,
        };

        // Small delay to show the scale effect before navigation
        setTimeout(() => {
          runOnJS(performNavigation)(layout);
        }, 50);
      }
    );
  };

  return (
    <View style={{ padding: 10 }}>
      <AnimatedPressable
        onPress={handleNavigate}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[animatedStyle]}
        ref={cardRef}
      >
        <Card
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
    </View>
  );
};

export default SharedTransitionCard;
