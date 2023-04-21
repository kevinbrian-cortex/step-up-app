import { View, Text } from "react-native";
import React from "react";

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text className="text-2xl font-extrabold">Catalog Screen</Text>
    </View>
  );
};
