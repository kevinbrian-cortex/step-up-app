import React from "react";
import Routes from "./routes";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import lightTheme from "./theme/lightTheme";

const theme = {
  ...DefaultTheme,
  colors: lightTheme,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
