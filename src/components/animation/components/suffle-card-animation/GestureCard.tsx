import { useTheme } from "@/src/styles";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  animationConfig,
  getPosition,
  SHUFFLE_CARD_HEIGHT,
} from "../../configs/ShuffleAnimation";
import { GestureCardProps } from "./type";

const GestureCard: FC<GestureCardProps> = ({ children, id, positions }) => {
  const { theme } = useTheme();

  const isGestureActive = useSharedValue(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaleValue = useSharedValue(1);
  const zIndex = useSharedValue(0);

  // Initialize position values when component mounts
  React.useEffect(() => {
    const totalCards = Object.keys(positions.value).length;
    const currentPosition = positions.value[id];

    if (currentPosition !== undefined) {
      const position = getPosition(currentPosition, totalCards);
      translateX.value = position.x;
      translateY.value = position.y;
      scaleValue.value = position.scale;
      zIndex.value = position.zIndex;
    }
  }, []);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition) => {
      if (currentPosition !== undefined && !isGestureActive.value) {
        // console.log("sss =>", currentPosition);
        const totalCards = Object.keys(positions.value).length;
        const position = getPosition(currentPosition, totalCards);

        translateX.value = withTiming(position.x, animationConfig);
        translateY.value = withTiming(position.y, animationConfig);
        scaleValue.value = withTiming(position.scale, animationConfig);
        zIndex.value = withTiming(position.zIndex, animationConfig);
      }
    }
  );

  const totalCards = Object.keys(positions.value).length;
  const currentPosition = positions.value[id];

  if (currentPosition === undefined) {
    console.warn(`Position not found for card id: ${id}`);
    return (
      <Animated.View style={{ width: "100%", height: SHUFFLE_CARD_HEIGHT }}>
        {children}
      </Animated.View>
    );
  }

  // Keep position update logic on JS thread since it modifies shared values
  const updatePositions = (
    cardId: number,
    currentPos: number,
    translationY: number
  ) => {
    // Only update if swipe is significant enough
    if (Math.abs(translationY) < 90) return;

    const totalCards = Object.keys(positions.value).length;
    const newPositions = { ...positions.value };

    if (translationY > 0) {
      // Swiping up - bring card to front
      Object.keys(newPositions).forEach((key) => {
        const keyNum = parseInt(key);
        if (keyNum === cardId) {
          newPositions[key] = 0; // Bring to front
        } else if (newPositions[key] < currentPos) {
          newPositions[key] = newPositions[key] + 1; // Move others back
        }
      });
    }

    positions.value = newPositions;
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      isGestureActive.value = true;
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx: any) => {
      translateX.value = ctx.x + translationX;
      translateY.value = ctx.y + translationY;
    },
    onEnd: ({ translationY }) => {
      const currPosition = positions.value[id];

      // Use runOnJS for position updates that modify shared values
      runOnJS(updatePositions)(id, currPosition, translationY);

      // Reset to final position after gesture ends
      const finalPosition = getPosition(positions.value[id], totalCards);
      translateX.value = withTiming(finalPosition.x, animationConfig);
      translateY.value = withTiming(finalPosition.y, animationConfig);
      scaleValue.value = withTiming(finalPosition.scale, animationConfig);
      zIndex.value = withTiming(finalPosition.zIndex, animationConfig);
      isGestureActive.value = false;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    // Calculate opacity based on translateY
    // When dragging downward (positive translateY), opacity decreases
    // You can adjust these values based on your needs:
    // - inputRange: [0, 200] means opacity starts changing at 0 and reaches minimum at 200px
    // - outputRange: [1, 0.3] means opacity goes from 100% to 30%
    const opacity = interpolate(
      translateY.value,
      [80, 100, 120, 130, 200], // Input range: 0 to 200px downward drag
      [1, 0.4, 0.3, 0.2, 0.1], // Output range: 100% to 30% opacity
      Extrapolate.CLAMP // Clamp values outside the range
    );
    const bgColor = interpolateColor(
      translateY.value,
      [100, 150], // Input range: 0 to 200px downward drag
      [
        theme.colors.palette.defaultCardBg,
        theme.colors.palette.sharedElementCardBg,
      ] // Output range: 100% to 30% opacity
    );

    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      borderRadius: theme.spacing.layout.cardPadding,
      backgroundColor: bgColor,
      height: SHUFFLE_CARD_HEIGHT,
      zIndex: Math.round(zIndex.value),
      opacity: opacity,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scaleValue.value },
      ],
    };
  });

  return (
    <Animated.View style={[animatedStyles]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default GestureCard;
