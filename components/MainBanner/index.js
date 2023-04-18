import { ImageBackground, Text, View } from "react-native";

export default () => {
  return (
    <ImageBackground
      source={require("../../assets/products/product-2.jpg")}
      resizeMethod="resize"
      resizeMode="cover"
      style={{
        height: 350,
        width: "100%",
        border: 1,
        borderRadius: 50,
      }}
      imageStyle={{
        borderRadius: 10,
      }}
      className="mt-2"
    >
      <View className="flex-1 align-text-bottom justify-end">
        <View className="p-4 bg-white blur-2 opacity-70 m-2 rounded-lg">
          <Text className="font-bold text-xl">
            New Sneakers are waiting for you!
          </Text>
          <Text>Street Style</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
