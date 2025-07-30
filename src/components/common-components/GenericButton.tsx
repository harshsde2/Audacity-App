import { Theme, useTheme } from "@/src/styles";
import React, { FC } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "./CustomText";

export interface GenericButtonProps {
  isLoading?: boolean;
  title: string;
  onPress: () => void;
  cStyle?: object; // Use StyleProp<ViewStyle> for React Native
  tStyle?: object; // Use StyleProp<TextStyle> for React Native
  disabled?: boolean;
  icon?: string | any;
  showLoader?: boolean;
}

const GenericButton: FC<GenericButtonProps> = ({
  isLoading,
  title,
  onPress,
  cStyle,
  tStyle,
  disabled,
  icon,
  showLoader,
}) => {
  const { theme } = useTheme();
  const styles = customStyles(theme);

  // console.log("is loading. =>",isLoading)
  return (
    <TouchableOpacity
      disabled={!!disabled}
      onPress={onPress}
      style={{
        width: "100%",
        backgroundColor: theme?.colors.palette.defaultCardBg,
        borderRadius: 30,
        borderColor: theme?.colors.palette.defaultCardBorder,
        borderWidth: 1,
        padding: 10,
        opacity: disabled ? 0.7 : 1,
        ...cStyle,
      }}
    >
      {!showLoader && (
        <View style={[styles.flexbox]}>
          <CustomText
            variant={"button"}
            color={theme.colors.palette.white}
            style={[tStyle]}
          >
            {title}
          </CustomText>
        </View>
      )}

      {showLoader && (
        <View style={[styles.flexbox]}>
          {!isLoading ? (
            <CustomText
              variant={"button"}
              color={theme.colors.palette.white}
              style={{}}
            >
              {title}
            </CustomText>
          ) : (
            <ActivityIndicator
              size={"small"}
              color={theme?.colors?.palette?.white}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default GenericButton;

const customStyles = (theme: Theme) =>
  StyleSheet.create({
    flexbox: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
  });
