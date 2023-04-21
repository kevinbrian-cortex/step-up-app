import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default () => {
  return (
    <View className="flex flex-row justify-between p-4 pt-8 items-center">
      <Text className="text-xl font-black">Hello Kevin!</Text>
      <Pressable className="p-2 rounded-md bg-purple-200">
        <Ionicons name="search-outline" size={26} />
      </Pressable>
    </View>
  );
};
