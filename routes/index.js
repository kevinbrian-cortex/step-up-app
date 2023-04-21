import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoute from "./stack.route";

export default () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};
