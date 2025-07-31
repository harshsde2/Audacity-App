import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import Card from "./Card";
import CustomText from "./CustomText";
import GenericButton from "./GenericButton";

export default function FancyCard() {
  const { theme } = useTheme();
  const styles = { ...useGlobalStyles() };
  return (
    <Card
      style={[{ width: "100%", height: 190 }]}
      backgroundColor="transparent"
      borderColor="transparent"
      padding={0}
      borderRadius={30}
    >
      <LinearGradient
        className="rounded-xl p-4"
        colors={[
          theme.colors.palette.cardLinearGradiantV1,
          theme.colors.palette.cardLinearGradiantV2,
          theme.colors.palette.cardLinearGradiantV3,
        ]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View
          style={[
            { width: "100%", height: 190, borderRadius: 20, padding: 20 },
          ]}
        >
          <CustomText size={25} fontWeight="semiBold" variant="h1">
            Portfolio Value
          </CustomText>
          <CustomText size={35} fontWeight="bold" variant="h1">
            £342,467
          </CustomText>
          <View style={[styles.cardRowWithAlign, { marginTop: 20 }]}>
            <GenericButton
              title="View"
              onPress={() => {}}
              cStyle={{
                backgroundColor: theme.colors.palette.cardLinearGradiantV3,
                borderColor: theme.colors.palette.golden100,
                width: 120,
              }}
            />
            <GenericButton
              title="+"
              onPress={() => {}}
              cStyle={{
                backgroundColor: theme.colors.palette.cardLinearGradiantV3,
                borderColor: theme.colors.palette.golden100,
                width: 50,
              }}
              tStyle={{ fontSize: 25, lineHeight: 25 }}
            />
          </View>
        </View>
      </LinearGradient>
    </Card>
  );
}
