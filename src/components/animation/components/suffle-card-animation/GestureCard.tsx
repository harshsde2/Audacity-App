import React, { FC } from "react";
import { View } from "react-native";
import {
  getPosition,
  SHUFFLE_CARD_HEIGHT,
} from "../../configs/ShuffleAnimation";
import { GestureCardProps } from "./type";

const GestureCard: FC<GestureCardProps> = ({ children, id, positions }) => {
  const totalCards = Object.keys(positions).length;
  const index = parseInt(id); // assuming `id` is a stringified index like "0", "1", etc.

  const position = getPosition(positions[id]);

  // distance from last card
  const distanceFromTop = totalCards - index - 1;
  const baseScale = 1;
  const scaleStep = 0.07;

  // Ensure minimum scale doesn't go below 0
  const scale = Math.max(baseScale - distanceFromTop * scaleStep, 0);
  const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: SHUFFLE_CARD_HEIGHT,
    transform: [
      { translateX: position.x },
      { translateY: position.y },
      { scale: scale },
    ],
  } as any;

  return <View style={[styles]}>{children}</View>;
};

export default GestureCard;
