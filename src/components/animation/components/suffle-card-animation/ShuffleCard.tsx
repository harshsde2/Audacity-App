import { SvgIcons } from "@/src/assets/svgs";
import { useTheme } from "@/src/styles";
import React, { FC } from "react";
import { View } from "react-native";
import Card from "../../../common-components/Card";
import CustomText from "../../../common-components/CustomText";
import { ShuffleCardProps } from "./type";

const ShuffleCard: FC<ShuffleCardProps> = ({ cardItem }) => {
  const { theme } = useTheme();

  return (
    <Card
      style={[{ width: "100%", height: 220 }]}
      borderRadius={theme.spacing.spacing[4]}
      key={cardItem.id}
    >
      <View style={{ flex: 1 / 2 }}>
        <CustomText variant={"h4"}>{cardItem?.title}</CustomText>
      </View>
      <View style={{ flex: 1 / 2, gap: 10 }}>
        <CustomText size={18} fontWeight={"medium"} variant={"body1"}>
          {cardItem?.heading}
        </CustomText>
        <SvgIcons.Percentage />
        <CustomText size={10} variant={"body1"}>
          {cardItem?.description}
        </CustomText>
      </View>
    </Card>
  );
};

export default ShuffleCard;
