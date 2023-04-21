import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import PromotionBanner from "../../components/PromotionBanner";
import MainBanner from "../../components/MainBanner";

export default () => {
  const theme = useTheme();

  return (
    <ScrollView className="pl-3 pr-3">
      {/* app Header */}
      <Appbar.Header>
        <Appbar.Content title="Hello Maria" className="font-bold text-xl" />
        <Appbar.Action
          icon="magnify"
          color={theme.colors.secondary}
          className="bg-blue-200 rounded-lg"
        />
      </Appbar.Header>

      {/* promotion banner */}
      <PromotionBanner />

      {/* main banner */}
      <MainBanner />
    </ScrollView>
  );
};
