import { ImageBackground, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default () => {
  const theme = useTheme();
  return (
    <View>
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
        className="mt-3"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          locations={[0.5, 1]}
          start={{ x: 0, y: 2 }}
          end={{ x: 0, y: 0 }}
          className="flex-1 align-text-bottom justify-end rounded-xl"
        >
          <View className="p-4 blur-2 opacity-70 m-2 rounded-lg">
            <Text className="font-bold text-xl text-slate-50">
              New Sneakers are waiting for you!
            </Text>
            <Text className="text-lg text-slate-50">Street Style</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
