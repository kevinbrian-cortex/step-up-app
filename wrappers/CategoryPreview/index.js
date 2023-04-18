import { FlatList, Text, View } from "react-native";
import CategoryAvatar from "../../components/CategoryAvatar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Fourth Item",
  },
];

export default () => {
  return (
    <View>
      <View className="mt-6">
        <Text className="text-xl font-bold pb-4">Popular Categories</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <CategoryAvatar />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
