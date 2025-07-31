import { SvgIcons } from "@/src/assets/svgs";
import { useAuth } from "@/src/context/AuthContext";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import React from "react";
import { ScrollView, View } from "react-native";
import SharedTranstionCard from "../animation/components/shared-transition-card-animation/SharedTranstionCard";
import ShuffleCard from "../animation/components/suffle-card-animation/ShuffleCard";
import ShuffleCardListComponent from "../animation/components/suffle-card-animation/ShuffleCardListComponent";
import Card from "../common-components/Card";
import CustomText from "../common-components/CustomText";
import GenericButton from "../common-components/GenericButton";

const HomeScreen = () => {
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

  console.log("auth user =>", auth.user);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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
      <View>
        <ShuffleCardListComponent>
          {Cards.map((card, index) => {
            return <ShuffleCard id={card.id} key={index} cardItem={card} />;
          })}
        </ShuffleCardListComponent>
      </View>
      <View>
        <SharedTranstionCard />
      </View>
      <View style={[{ marginBottom: 120 }]}>
        <Card
          style={[{ gap: 5, marginVertical: 10, width: "100%" }]}
          borderRadius={theme.spacing.spacing[4]}
        >
          <View style={[{ marginBottom: 20, gap: 10 }]}>
            <CustomText size={11} color={theme.colors.palette.defaultFadeText}>
              ACCOUNT CONNECTION
            </CustomText>
            <CustomText variant={"h4"}>
              A single place to grow your wealth
            </CustomText>
            <CustomText variant={"body1"}>
              4000+ Brokers, Banks, Pensions and Wrappers.
            </CustomText>
          </View>
          <GenericButton
            title="Add Account "
            onPress={() => {}}
            cStyle={{ backgroundColor: theme.colors.palette.white100 }}
            tStyle={{ color: "#000" }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
