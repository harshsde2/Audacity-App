import { SvgIcons } from "@/src/assets/svgs";
import { useAuth } from "@/src/context/AuthContext";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import LogoutModal from "../modals/LogoutModal";
import Card from "./Card";
import CustomText from "./CustomText";

const UserDetailsCard = () => {
  const { theme } = useTheme();
  const auth = useAuth();
  const { user } = auth;

  const name = user?.name?.split(" ")[0] || "";
  const image = user?.photoUrl;
  const styles = { ...useGlobalStyles() };

  const [isLoading, setIsLoading] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await GoogleSignin.signOut();
      auth.signOut();

      setIsLogoutModalVisible(false);
    } catch (error) {
      console.log("error during signOut", error);
    } finally {
      setIsLoading(false);
      setIsLogoutModalVisible(false);
    }
  };
  return (
    <Card
      backgroundColor="transparent"
      borderColor="transparent"
      style={[
        styles.cardRowWithAlign,
        {
          margin: 0,
          paddingHorizontal: 5,
          paddingVertical: 5,
          backgroundColor: "transparent",
        },
      ]}
    >
      <LogoutModal
        isLoading={isLoading}
        isVisible={isLogoutModalVisible}
        onClose={() => {
          setIsLogoutModalVisible(false);
        }}
        onAction={() => {
          handleSignOut();
        }}
      />
      <View style={{ flex: 1 }}>
        <CustomText variant="h4">Hello!</CustomText>
        <CustomText variant="body1">Welcome back {name}</CustomText>
      </View>
      <TouchableOpacity onPress={() => setIsLogoutModalVisible(true)}>
        {image ? (
          <Image
            source={{ uri: image }}
            width={40}
            height={40}
            style={{ borderRadius: 20 }}
          />
        ) : (
          <SvgIcons.Avatar width={40} height={40} />
        )}
      </TouchableOpacity>
    </Card>
  );
};

export default UserDetailsCard;
