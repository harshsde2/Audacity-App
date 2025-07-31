import { useTheme } from "@/src/styles";
import React from "react";
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface CardProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  borderRadius?: number;
  elevation?: number;
  shadowColor?: string;
  borderColor?: string;
  borderWidth?: number;
  padding?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  backgroundColor,
  borderRadius = 25,
  elevation = 5,
  shadowColor,
  borderColor,
  borderWidth,
  padding = 20,
  onLayout,
  ...props
}) => {
  const { theme } = useTheme();

  const defaultBackgroundColor =
    backgroundColor || theme.colors.card.background;
  const defaultShadowColor = shadowColor || theme.colors.shadow.default;
  const defaultBorderColor = borderColor || theme.colors.card.border;
  const defaultBorderWidth = borderWidth !== undefined ? borderWidth : 1;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onLayout={onLayout}
      style={[
        styles.card,
        {
          backgroundColor: defaultBackgroundColor,
          borderRadius,
          elevation,
          shadowColor: defaultShadowColor,
          borderColor: defaultBorderColor,
          borderWidth: defaultBorderWidth,
          padding,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "hidden",
  },
});

export default Card;
