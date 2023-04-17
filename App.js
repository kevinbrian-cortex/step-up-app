import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonIncrement, ButtonPrimaryWithIcon } from "./components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import PromotionBanner from "./components/PromotionBanner";
import MainBanner from "./components/MainBanner";

export default function App() {
  return (
    <View className="p-2">
      <PromotionBanner />
      <MainBanner />
    </View>
  );
}
