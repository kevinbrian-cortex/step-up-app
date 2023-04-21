import React from "react";
import Routes from "./routes";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import lightTheme from "./theme/lightTheme";
import { SafeAreaView } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: lightTheme,
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </SafeAreaView>
  );
}
