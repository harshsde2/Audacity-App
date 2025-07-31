import { useTheme } from "@/src/styles";
import React, { FC } from "react";
import { View } from "react-native";
import CustomText from "./CustomText";

type ScreenIndicatorComponentProps = {
  title: string;
  showTitle?: boolean;
};

const ScreenIndicatorComponent: FC<ScreenIndicatorComponentProps> = ({
  title,
  showTitle,
}) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.palette.defaultCardBg,
          margin: 5,
          height: showTitle ? 30 : 0,
          padding: 5,
          borderRadius: theme.spacing.spacing[4],
        },
      ]}
    >
      {showTitle && (
        <CustomText size={14} fontWeight="semiBold" variant="body2">
          {title}
        </CustomText>
      )}
    </View>
  );
};

export default ScreenIndicatorComponent;
