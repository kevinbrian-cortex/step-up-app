import { FlatList, Text, View } from "react-native";
import ProductItem from "../../components/ProductItem";

//data
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
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d788",
    title: "Fify Item",
  },
  {
    id: "5869f-3da1-471f-bd96-145571e29d79",
    title: "Sixth Item",
  },
];

export default () => {
  return (
    <View>
      <View className="mt-6">
        <Text className="text-xl font-bold pb-4">Trending Products</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <ProductItem />}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        key={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
