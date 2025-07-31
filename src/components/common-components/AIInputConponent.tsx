import { SvgIcons } from "@/src/assets/svgs";
import { useTheme } from "@/src/styles";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Card from "./Card";

const AIInputConponent = () => {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const styles = { ...useGlobalStyles() };
  return (
    <Card
      borderColor={theme.colors.palette.golden400}
      backgroundColor={theme.colors.palette.golden600}
      borderRadius={theme.spacing.spacing[10]}
      padding={5}
      style={[
        styles.cardRowWithAlign,
        {
          paddingHorizontal: 15,
          position: "absolute",
          bottom: 10,
          width: "100%",

          //   zIndex: 100,
        },
      ]}
    >
      <SvgIcons.AIIcon />
      <View style={[{ flex: 1 }]}>
        <TextInput
          placeholderTextColor={theme.colors.palette.golden400}
          placeholder="Ask AI"
          value={text}
          onChangeText={setText}
          style={{ height: 40 }}
        />
      </View>
      <SvgIcons.ArrowUpCircle />
    </Card>
  );
};

export default AIInputConponent;
