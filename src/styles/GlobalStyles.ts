import { StyleSheet } from "react-native";
import { Theme } from "./theme";
import { useTheme } from "./ThemeContext";

export const useGlobalStyles = () => {
  const { theme } = useTheme();
  return globalStyles(theme);
};

export const globalStyles = (theme: Theme) =>
  StyleSheet.create({
    cardRowWithAlign: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 10,
    },
    indicatorContainer: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    shadowContainer: {
      shadowColor: theme.colors.palette.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
    },
    rowJustifyItems: {
      flexDirection: "row",
      backgroundColor: "red",
      justifyContent: "space-around",
      alignItems: "center",
    },
  });
