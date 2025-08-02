import { Easing } from "react-native-reanimated";

export const SHUFFLE_CARD_HEIGHT = 220;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 500,
};

export const getPosition = (order: number, length: number) => {
  "worklet";

  const baseScale = 0.79; // Starting scale for order 0
  const scaleIncrement = 0.07; // Increment for each order level

  // Calculate scale: order 0 = 0.79, order 1 = 0.86, order 2 = 0.93, order 3 = 1.0
  const scale = baseScale + order * scaleIncrement;

  // Top card (order 0) gets highest zIndex
  const zIndex = 100 + order;

  return {
    x: 0,
    y: order * 20, // Each card is offset by 20 units
    scale: Number(scale.toFixed(2)),
    zIndex: zIndex,
  };
};
