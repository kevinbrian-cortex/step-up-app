import { Text, View } from "react-native";
import { ButtonSecondary } from "../Button";

export default () => {
  return (
    <View className="bg-green-400 p-6 flex-row items-center justify-between rounded-xl m-3 ml-0 mr-0">
      <View>
        <Text className="text-slate-900 text-2xl font-bold">Summer Sale!</Text>
        <Text className="text-slate-900 text-base">Now up to -70%</Text>
      </View>

      <ButtonSecondary
        bgColor={"white"}
        textColor={"black"}
        text={"Check it out"}
      />
    </View>
  );
};
