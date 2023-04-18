import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default () => {
  return (
    <View className="m-2 flex-1 ">
      <ImageBackground
        source={require("../../assets/products/product-2.jpg")}
        resizeMode="cover"
        style={{
          height: 300,
          width: "auto",
        }}
        imageStyle={{
          borderRadius: 20,
        }}
      >
        <View className="flex-1 justify-end p-2">
          <TouchableOpacity className="bg-white self-end p-2 m-2  rounded-xl">
            <Ionicons name="heart" size={25} color="pink" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View className="mt-3">
        <Text className="text-md">Nike Performance</Text>
        <Text className="text-lg font-bold">Air Force 1 - Train</Text>
        <Text className="text-lg font-bold text-purple-700">MT 4999.99</Text>
      </View>
    </View>
  );
};
