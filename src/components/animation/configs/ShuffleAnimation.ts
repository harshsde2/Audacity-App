import { Easing } from "react-native-reanimated";

export const SHUFFLE_CARD_HEIGHT = 220;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 500,
};

export const getPosition = (order: any) => {
  "worklet";
  return {
    x: 0,
    y: order * 20,
  };
};
