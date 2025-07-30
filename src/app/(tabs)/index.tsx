import { SvgIcons } from "@/src/assets/svgs";
import SharedTranstionCard from "@/src/components/animation/components/shared-transition-card-animation/SharedTranstionCard";
import ShuffleCard from "@/src/components/animation/components/suffle-card-animation/ShuffleCard";
import ShuffleCardListComponent from "@/src/components/animation/components/suffle-card-animation/ShuffleCardListComponent";
import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import GenericButton from "@/src/components/common-components/GenericButton";
import ScreenContainer from "@/src/components/common-components/ScreenContainer";
import { useAuth } from "@/src/context/AuthContext";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import React from "react";
import { View } from "react-native";

const home = () => {
  const auth = useAuth();
  const { theme } = useTheme();
  const styles = { ...useGlobalStyles() };
  const Cards = [
    {
      id: 0,
      title: "Average Interest on Savings",
      heading: "Your Average Interest",
      percent: "%",
      description:
        "Your savings are earning 1.8% — is your money working hard enough?",
    },
    {
      id: 1,
      title: "Average Interest on Savings",
      heading: "Your Average Interest",
      percent: "1.8%",
      description:
        "Your savings are earning 1.8% — is your money working hard enough?",
    },
    {
      id: 2,
      title: "Average Interest on Savings",
      heading: "Your Average Interest",
      percent: "1.8%",
      description:
        "Your savings are earning 1.8% — is your money working hard enough?",
    },
    {
      id: 3,
      title: "Average Interest on Savings",
      heading: "Your Average Interest",
      percent: "asdsa",
      description:
        "Your savings are earning 1.8% — is your money working hard enough?",
    },
  ];

  return (
    <ScreenContainer
      scrollable
      padding={0}
      paddingHorizontal={10}
      paddingVertical={5}
    >
      {/* <AIInputConponent /> */}
      <Card
        borderRadius={theme.spacing.spacing[4]}
        style={[styles.cardRowWithAlign]}
      >
        <SvgIcons.WorthMoney />
        <View style={{ gap: 0 }}>
          <CustomText variant={"h4"}>Get your money's worth</CustomText>
          <CustomText size={12} variant={"subtitle2"}>
            Finish setting up Audacity
          </CustomText>
        </View>
      </Card>
      <ShuffleCardListComponent>
        {Cards.map((card, index) => {
          return <ShuffleCard id={card.id} key={index} cardItem={card} />;
        })}
      </ShuffleCardListComponent>
      <View>
        <SharedTranstionCard />
      </View>
      <View>
        <Card
          style={[
            { gap: 5, marginVertical: 10, width: "100%", marginBottom: 120 },
          ]}
          borderRadius={theme.spacing.spacing[4]}
        >
          <View style={[{ marginBottom: 20, gap: 5 }]}>
            <CustomText size={11} color={theme.colors.palette.defaultFadeText}>
              Account Connection
            </CustomText>
            <CustomText size={24} variant={"h1"}>
              A single place to grow your wealth
            </CustomText>
            <CustomText variant={"body1"}>
              4000+ Brokers, Banks, Pensions and Wrappers.
            </CustomText>
          </View>
          <GenericButton
            title="Add Account"
            onPress={() => {}}
            cStyle={{ backgroundColor: theme.colors.palette.white100 }}
            tStyle={{ color: "#000" }}
          />
        </Card>
      </View>
    </ScreenContainer>
  );
};

export default home;
