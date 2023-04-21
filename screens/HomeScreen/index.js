import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

export default () => {

  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
      }}
    >
      <Text className="text-2xl font-extrabold">Home Screen</Text>
    </View>
  );
};
