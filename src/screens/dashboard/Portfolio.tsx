import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import GenericButton from "@/src/components/common-components/GenericButton";
import { useAuth } from "@/src/context/AuthContext";
import { Theme, useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import { styles } from "@/src/styles/Styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  InteractionManager,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedCard = Animated.createAnimatedComponent(Card);
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const globStyles = styles;

const { width, height } = Dimensions.get("window");

const Cards = [
  {
    id: 0,
    title: "Portfolio Analysis",
    description:
      "Get detailed insights on your investment performance and allocation across different asset classes",
  },
  {
    id: 1,
    title: "Risk Assessment",
    description:
      "Understand your risk profile and get personalized recommendations based on your financial goals",
  },
  {
    id: 2,
    title: "Market Intelligence",
    description:
      "Stay informed with AI-powered market analysis and trends that affect your investments",
  },
  {
    id: 3,
    title: "Scenario Planning",
    description:
      "Model different financial scenarios and their potential outcomes for better decision making",
  },
  {
    id: 4,
    title: "Tax Optimization",
    description:
      "Maximize your returns with UK-specific tax strategies and optimization techniques",
  },
  {
    id: 5,
    title: "Goal Tracking",
    description:
      "Monitor progress towards your financial objectives and adjust strategies accordingly",
  },
  {
    id: 6,
    title: "Investment Ideas",
    description:
      "Discover new investment opportunities that align with your risk tolerance and goals",
  },
  {
    id: 7,
    title: "Cash Flow Analysis",
    description:
      "Analyze your income and expenses to optimize your financial planning strategy",
  },
];

// Individual Card Component with FadeInLeft animation
const AnimatedCardItem = ({ card, index, theme }: any) => {
  const cardAnimation = useSharedValue(0);
  const translateX = useSharedValue(-100);

  useEffect(() => {
    // Stagger the animations with delay based on index
    const delay = index * 300; // 150ms delay between each card

    cardAnimation.value = withDelay(delay, withTiming(1, { duration: 600 }));
    translateX.value = withDelay(
      delay,
      withSpring(0, {
        damping: 15,
        stiffness: 100,
      })
    );
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: cardAnimation.value,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Card
        style={{
          marginBottom: 12,
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
        borderRadius={theme.spacing.spacing[4]}
      >
        <View style={{ gap: 8 }}>
          <CustomText size={16} variant="h4">
            {card.title}
          </CustomText>
          <CustomText
            size={13}
            textBreakStrategy={"highQuality"}
            style={{ textAlign: "left", lineHeight: 18 }}
            color={theme.colors.palette.defaultHighFadeText}
            variant={"body1"}
          >
            {card.description}
          </CustomText>
          <View style={{ marginTop: 8 }}>
            <GenericButton
              title="Learn More"
              onPress={() => {
                console.log(`Pressed ${card.title}`);
              }}
              cStyle={{ alignSelf: "flex-start" }}
            />
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};

const Portfolio = () => {
  const { theme } = useTheme();
  const { onSharedTransitionCardClose } = useAuth();
  const navigation = useNavigation();
  const [isMounted, setIsMounted] = useState(false);

  const route = useRoute();

  const { cardLayout } = route.params as any;

  const progress = useSharedValue(0);
  const backgroundOpacity = useSharedValue(0);

  useEffect(() => {
    // Start transition immediately
    progress.value = withSpring(1, {
      damping: 20,
      stiffness: 90,
    });
    backgroundOpacity.value = withTiming(1, { duration: 300 });
  }, []);

  const sharedElementStyle = useAnimatedStyle(() => {
    const targetWidth = width * 0.9;
    const targetHeight = height * 0.8;
    const targetX = width * 0.05;
    const targetY = height * 0.075;

    return {
      position: "absolute",
      left: interpolate(
        progress.value,
        [0, 1],
        [cardLayout.x, targetX],
        Extrapolate.CLAMP
      ),
      top: interpolate(
        progress.value,
        [0, 1],
        [cardLayout.y, targetY],
        Extrapolate.CLAMP
      ),
      width: interpolate(
        progress.value,
        [0, 1],
        [cardLayout.width, targetWidth],
        Extrapolate.CLAMP
      ),
      height: interpolate(
        progress.value,
        [0, 1],
        [cardLayout.height, targetHeight],
        Extrapolate.CLAMP
      ),
      borderRadius: interpolate(
        progress.value,
        [0, 1],
        [16, 20],
        Extrapolate.CLAMP
      ),
      //   opacity: interpolate(
      //     progress.value,
      //     [0, 0.2, 0.7, 1],
      //     [0.6, 1, 1, 1],
      //     Extrapolate.CLAMP
      //   ),
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.2, 1],
        [
          theme.colors.palette.transparent,
          theme.colors.palette.defaultCardBg,
          theme.colors.palette.sharedElementCardBg,
        ]
      ),
      borderColor: interpolateColor(
        progress.value,
        [0, 0.2, 1],
        [
          theme.colors.palette.transparent,
          theme.colors.palette.defaultCardBg,
          theme.colors.palette.sharedElementCardBg,
        ]
      ),
    };
  });

  const backgroundStyle = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  // Content opacity animation
  const contentOpacityStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0, 0.7, 1],
      [0, 0, 1],
      Extrapolate.CLAMP
    ),
  }));

  const performNavigation = () => {
    // Use InteractionManager to ensure smooth transition
    InteractionManager.runAfterInteractions(() => {
      navigation.goBack();
    });
  };

  const handleClose = (): void => {
    if (navigation.canGoBack()) {
      backgroundOpacity.value = withTiming(0, { duration: 200 });
      progress.value = withSpring(
        0,
        {
          damping: 20,
          stiffness: 90,
        },
        () => {
          runOnJS(performNavigation)();
        }
      );
    }
  };

  const styles = {
    ...useGlobalStyles(),
    ...customStyles(theme),
    ...globStyles,
  };

  return (
    <Pressable
      style={[{ flex: 1, alignItems: "center", justifyContent: "center" }]}
      onPress={() => {
        handleClose();
      }}
    >
      {/* Background overlay */}
      <Animated.View style={[styles.background, backgroundStyle]} />

      <AnimatedCard
        style={[styles.sharedElement, sharedElementStyle]}
        padding={5}
        borderRadius={theme.spacing.spacing[4]}
      >
        <Animated.View style={[{ flex: 1 }, contentOpacityStyle]}>
          <Animated.View
            style={[{ position: "absolute", right: 5 }, contentOpacityStyle]}
          >
            <Pressable
              style={styles.closeButton}
              onPress={() => {
                handleClose();
              }}
            >
              <CustomText variant="h4">✕</CustomText>
            </Pressable>
          </Animated.View>
          {/* Header Section - Fixed at top */}
          <View
            style={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 16 }}
          >
            <View style={{ gap: 10 }}>
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
          </View>

          {/* Section Title */}
          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <CustomText size={20} variant="h3">
              What Alice can help with
            </CustomText>
          </View>
          {/* Scrollable Cards Section */}
          <Animated.View
            style={[styles.contentWrapper, contentOpacityStyle, { flex: 1 }]}
          >
            <ScrollView
              scrollEnabled={true}
              nestedScrollEnabled={true}
              style={{ flex: 1 }}
              contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 20,
              }}
              showsVerticalScrollIndicator={false}
              bounces={true}
            >
              {Cards.map((card, index) => (
                <AnimatedCardItem
                  key={card.id}
                  card={card}
                  index={index}
                  theme={theme}
                />
              ))}
            </ScrollView>
          </Animated.View>
        </Animated.View>
      </AnimatedCard>
    </Pressable>
  );
};

export default Portfolio;

const customStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    sharedElement: {
      overflow: "hidden",
    },
    contentWrapper: {
      flex: 1,
    },
  });
