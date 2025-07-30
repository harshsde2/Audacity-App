import { useTheme } from "@/src/styles";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import GestureCard from "./GestureCard";
import { Positions, ShuffleCardListComponentProps } from "./type";

const ShuffleCardListComponent: FC<ShuffleCardListComponentProps> = ({
  children,
}) => {
  const { theme } = useTheme();

  const positions: Positions = Object.assign(
    {},
    ...children.map((child, index) => ({ [child.props.id]: index }))
  );

  // console.log("positions ->", positions);

  return (
    <ScrollView
      contentContainerStyle={[]}
      bounces={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      style={{
        width: "100%",
        paddingHorizontal: theme.spacing.spacing[5],
        height: 300,
        // backgroundColor: "red",
      }}
    >
      {children.map((child) => {
        return (
          <GestureCard
            key={child.props.id}
            id={child.props.id}
            positions={positions}
          >
            {child}
          </GestureCard>
        );
      })}
    </ScrollView>
  );
};

export default ShuffleCardListComponent;
