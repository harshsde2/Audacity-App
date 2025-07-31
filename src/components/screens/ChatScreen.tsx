import { SvgIcons } from "@/src/assets/svgs";
import { useAuth } from "@/src/context/AuthContext";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import Card from "../common-components/Card";
import CustomText from "../common-components/CustomText";

const ChatScreen = () => {
  const { theme } = useTheme();
  const auth = useAuth();
  const styles = { ...useGlobalStyles() };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={[{ flex: 1, alignItems: "center" }]}>
        <Card
          padding={7}
          style={[styles.cardRowWithAlign, { width: "90%", paddingStart: 15 }]}
        >
          <CustomText style={{ flex: 1 }}>
            How is my Portfolio doing?
          </CustomText>
          {auth.user?.photoUrl ? (
            <Image
              source={{ uri: auth.user?.photoUrl }}
              width={30}
              height={30}
              style={{ borderRadius: 15 }}
            />
          ) : (
            <SvgIcons.Avatar />
          )}
        </Card>
        <View style={[{ width: "90%", marginTop: 20 }]}>
          <SvgIcons.AudacityLogo />
          <CustomText size={16} variant="caption">
            Alice, your portfolio is invested 13% in cash and 87% in just 5 tech
            stocks. There’s room for improvement, especially since you want to
            buy a home next year!
          </CustomText>
        </View>
        <Card style={[{ marginTop: 20, gap: 10 }]}>
          <SvgIcons.ProgressWithPercentage />
          <SvgIcons.ProgressBar />
        </Card>
      </View>
    </ScrollView>
  );
};

export default ChatScreen;
