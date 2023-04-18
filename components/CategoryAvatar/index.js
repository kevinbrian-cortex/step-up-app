import { Image, Text, View } from "react-native";

export default () => {
  return (
    <View className="flex-column m-2 justify-center items-center">
      <Image
        source={require("../../assets/products/product-1.jpg")}
        resizeMode="cover"
        style={{ width: 100, height: 100 }}
        className="border rounded-full"
      />
      <Text className="text-lg">Woman</Text>
      <Text className="font-bold text-md">Training</Text>
    </View>
  );
};
