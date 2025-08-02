import { useTheme } from "@/src/styles";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import GestureCard from "./GestureCard";
import { Positions, ShuffleCardListComponentProps } from "./type";

const ShuffleCardListComponent: FC<ShuffleCardListComponentProps> = ({
  children,
}) => {
  const { theme } = useTheme();

  if (!children || children.length === 0) {
    console.warn("No children provided to ShuffleCardListComponent");
    return null;
  }

  const positions = useSharedValue<Positions>(
    Object.assign(
      {},
      ...children.map((child, index) => {
        const id = child.props.id;
        // console.log(`Creating position for card id: ${id}, index: ${index}`);

        if (id === undefined || id === null) {
          console.error(`Card at index ${index} has undefined/null id`);
          return {};
        }

        return { [id]: index };
      })
    )
  );

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
