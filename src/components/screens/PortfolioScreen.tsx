import { SvgIcons } from "@/src/assets/svgs";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import React from "react";
import { ScrollView, View } from "react-native";
import Card from "../common-components/Card";
import CustomText from "../common-components/CustomText";
import FancyCard from "../common-components/FancyCard";

const PortfolioScreen = () => {
  const { theme } = useTheme();
  const styles = { ...useGlobalStyles() };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={[{ flex: 1 }]}>
        <FancyCard />
        <Card style={[{ marginTop: 30 }]}>
          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between" },
            ]}
          >
            <CustomText>Investment (2)</CustomText>
            <CustomText>£300,100</CustomText>
          </View>
          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between", marginTop: 20 },
            ]}
          >
            <SvgIcons.VanguardLogo />
            <View style={[{ flex: 1 }]}>
              <CustomText>Vanguard</CustomText>
              <CustomText color={theme.colors.palette.defaultFadeText}>
                Current Amount
              </CustomText>
            </View>
            <CustomText>£248,764</CustomText>
          </View>
          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between", marginTop: 20 },
            ]}
          >
            <SvgIcons.BarclaysLogo />
            <View style={[{ flex: 1 }]}>
              <CustomText>Barclays</CustomText>
              <CustomText color={theme.colors.palette.defaultFadeText}>
                Easy Access Savings
              </CustomText>
            </View>
            <CustomText>£51,336</CustomText>
          </View>
        </Card>
        <Card style={[{ marginTop: 30 }]}>
          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between" },
            ]}
          >
            <CustomText>Savings (3)</CustomText>
            <CustomText>£42,367</CustomText>
          </View>
          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between", marginTop: 20 },
            ]}
          >
            <SvgIcons.VanguardLogo />
            <View style={[{ flex: 1 }]}>
              <CustomText>Monzo</CustomText>
              <CustomText color={theme.colors.palette.defaultFadeText}>
                Current Amount
              </CustomText>
            </View>
            <CustomText>£3,780</CustomText>
          </View>
          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between", marginTop: 20 },
            ]}
          >
            <SvgIcons.BarclaysLogo />
            <View style={[{ flex: 1 }]}>
              <CustomText>Barclays</CustomText>
              <CustomText color={theme.colors.palette.defaultFadeText}>
                Easy Access Savings{" "}
              </CustomText>
            </View>
            <CustomText>£25,725</CustomText>
          </View>

          <View
            style={[
              styles.cardRowWithAlign,
              { justifyContent: "space-between", marginTop: 20 },
            ]}
          >
            <SvgIcons.BarclaysLogo />
            <View style={[{ flex: 1 }]}>
              <CustomText>Barclays</CustomText>
              <CustomText color={theme.colors.palette.defaultFadeText}>
                90 Day Notice
              </CustomText>
            </View>
            <CustomText>£12,8620</CustomText>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default PortfolioScreen;
