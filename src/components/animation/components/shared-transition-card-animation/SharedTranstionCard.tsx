import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import GenericButton from "@/src/components/common-components/GenericButton";
import { useTheme } from "@/src/styles";
import React from "react";
import { ScrollView, View } from "react-native";

const SharedTranstionCard = () => {
  const { theme } = useTheme();
  const Cards = [
    {
      id: 0,
      title: "Retirement Planning",
      description:
        "Create a comprehensive retirement strategy based on your current savings and future gols",
    },
    {
      id: 1,
      title: "Retirement Planning",
      description:
        "Create a comprehensive retirement strategy based on your current savings and future gols",
    },
    {
      id: 2,
      title: "Retirement Planning",
      description:
        "Create a comprehensive retirement strategy based on your current savings and future gols",
    },
  ];
  return (
    <Card style={[{ gap: 5 }]} borderRadius={theme.spacing.spacing[4]}>
      <View style={[{ marginBottom: 50 }]}>
        <CustomText size={11} color={theme.colors.palette.defaultFadeText}>
          PLAN WITH AI
        </CustomText>
        <CustomText size={24} variant={"h1"}>
          Real-time Analysis with AI.
        </CustomText>
        <CustomText variant={"body1"}>
          Instant insight from Alice, your AI-Powered financial assistant.
        </CustomText>
      </View>
      <ScrollView horizontal>
        {Cards.map((card, index) => {
          return (
            <Card
              key={index}
              style={[
                { gap: 5, marginRight: 10, width: 280, paddingHorizontal: 15 },
              ]}
              borderRadius={theme.spacing.spacing[4]}
              padding={10}
            >
              <CustomText size={14} variant="h4">
                {card.title}
              </CustomText>
              <CustomText
                size={12}
                textBreakStrategy={"highQuality"}
                style={{ textAlign: "left" }}
                color={theme.colors.palette.defaultHighFadeText}
                variant={"h4"}
              >
                {card.description}
              </CustomText>
              <GenericButton title="Review" onPress={() => {}} />
            </Card>
          );
        })}
      </ScrollView>
    </Card>
  );
};

export default SharedTranstionCard;
