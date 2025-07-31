import { SvgIcons } from "@/src/assets/svgs";
import Card from "@/src/components/common-components/Card";
import CustomText from "@/src/components/common-components/CustomText";
import GenericButton from "@/src/components/common-components/GenericButton";
import ScreenContainer from "@/src/components/common-components/ScreenContainer";
import { useAuth } from "@/src/context/AuthContext";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

const LoginScreen = () => {
  const router = useRouter();
  const auth = useAuth();
  const { theme } = useTheme();
  const styles = { ...useGlobalStyles() };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // auth.signIn({ email: "harshpal@gmail.com", name: "harsh" });
    // // Later, you'll implement Google Auth here
    // router.replace("/(tabs)"); // After login, go to home screen
    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices();
      const resposne = await GoogleSignin.signIn();
      if (isSuccessResponse(resposne)) {
        const { idToken, user } = resposne.data;
        const { name, email, photo } = user;
        auth.signIn({
          name,
          email,
          photoUrl: photo,
        });
      }
    } catch (error: any) {
      if (isErrorWithCode(error as any)) {
        switch (error) {
          case statusCodes.IN_PROGRESS:
            console.log("Google Signin is in progress");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log("Play services not availabe");
            break;
          default:
            console.log(error?.code);
            break;
        }
      } else {
        console.log("An error occured");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenContainer hideAiInput={false} padding={20}>
      <View
        style={[
          { alignItems: "flex-start", flex: 1, justifyContent: "space-around" },
        ]}
      >
        <View
          style={[
            {
              // justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 100,
              // backgroundColor: "red",
            },
          ]}
        >
          <CustomText variant="h4" style={{ fontSize: 24 }}>
            Hi ! Welcome to
          </CustomText>
          <SvgIcons.AudacityLogo
            style={[{ position: "absolute", top: -30 }]}
            width={170}
            height={170}
          />
        </View>
        <Card
          style={[
            { width: "100%", justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={[{ width: "100%", gap: 10 }]}>
            <View style={[{ gap: 10 }]}>
              <CustomText
                style={{ paddingLeft: theme.spacing.spacing[2] }}
                size={14}
                variant="body2"
              >
                Enter Email
              </CustomText>
              <TextInput
                placeholder="abc@gmail.com"
                placeholderTextColor={theme.colors.palette.defaultFadeText}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                style={[
                  {
                    color: theme.colors.palette.white100,

                    borderRadius: theme.spacing.spacing[4],
                    borderColor: theme.colors.palette.golden100,
                    borderWidth: 1 / 2,
                    paddingLeft: theme.spacing.spacing[4],
                  },
                ]}
              />
            </View>
            <View style={[{ gap: 10 }]}>
              <CustomText
                style={{ paddingLeft: theme.spacing.spacing[2] }}
                size={14}
                variant="body2"
              >
                Password
              </CustomText>
              <TextInput
                placeholder="Password"
                placeholderTextColor={theme.colors.palette.defaultFadeText}
                value={password}
                secureTextEntry
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={[
                  {
                    color: theme.colors.palette.white100,
                    borderRadius: theme.spacing.spacing[4],
                    borderColor: theme.colors.palette.golden100,
                    borderWidth: 1 / 2,
                    paddingLeft: theme.spacing.spacing[4],
                  },
                ]}
              />
            </View>
          </View>

          <GenericButton
            // icon={<SvgIcons.googleIcon width={20} height={20} style={{}} />}
            title="Sign in"
            onPress={() => {
              handleLogin();
              // setIsLoading(!isLoading);
            }}
            cStyle={{
              borderRadius: 8,
              width: "70%",
              marginTop: 20,
              marginBottom: 10,
              padding: 7,
              backgroundColor: theme.colors.palette.white100,
            }}
            tStyle={[{ color: theme.colors.palette.defaultCardBg }]}
          />
          <View style={[styles.cardRowWithAlign, { width: "70%" }]}>
            <View
              style={{
                height: 1,
                width: "40%",
                backgroundColor: theme.colors.palette.defaultFadeText,
              }}
            />
            <CustomText>Or</CustomText>
            <View
              style={{
                height: 1,
                width: "40%",
                backgroundColor: theme.colors.palette.defaultFadeText,
              }}
            />
          </View>
          <GenericButton
            icon={<SvgIcons.googleIcon width={20} height={20} style={{}} />}
            title="Sign in With Google"
            onPress={() => {
              handleLogin();
            }}
            cStyle={{
              borderRadius: 8,
              width: "70%",
              marginTop: 10,
              padding: 7,
              backgroundColor: theme.colors.palette.white100,
            }}
            tStyle={[{ color: theme.colors.palette.defaultCardBg }]}
            showLoader={true}
            isLoading={isLoading}
          />
        </Card>
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;
