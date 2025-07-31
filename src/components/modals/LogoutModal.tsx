import React, { FC } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import { useTheme } from "@/src/styles";
import CustomText from "../common-components/CustomText";
import GenericButton from "../common-components/GenericButton";

type LogoutModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onAction: () => void;
  isLoading?: boolean;
};

const LogoutModal: FC<LogoutModalProps> = ({
  isVisible,
  onClose,
  onAction,
  isLoading,
}) => {
  const { theme } = useTheme();
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <Pressable onPress={onClose} style={styles.modalContainer}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={[
            styles.modalContent,
            {
              backgroundColor: theme.colors.palette.defaultCardBg,
              borderColor: theme.colors.palette.golden100,
              borderWidth: 1 / 2,
              borderBottomWidth: 0,
            },
          ]}
        >
          <View style={[{ alignItems: "center" }]}>
            <CustomText size={24} variant="h4">
              Logout
            </CustomText>
            <CustomText variant={"subtitle1"}>
              Sure you want to log out?
            </CustomText>
          </View>
          <GenericButton
            title="Yes , Logout"
            cStyle={{
              backgroundColor: theme.colors.palette.white100,
              marginTop: 25,
            }}
            showLoader={true}
            isLoading={isLoading}
            tStyle={{ color: theme.colors.palette.defaultCardBg }}
            onPress={() => {
              onAction();
              // navigation.navigate(SCREENS.LOGIN);
            }}
          />
          <GenericButton
            title={"Cancel"}
            cStyle={{
              backgroundColor: theme.colors.palette.white100,
              marginVertical: 10,
            }}
            tStyle={{ color: theme.colors.palette.defaultCardBg }}
            onPress={onClose}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
    elevation: 8,
  },
});
