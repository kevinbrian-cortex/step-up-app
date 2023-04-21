import { FlatList, Pressable, Text, View } from "react-native";
import { ActivityIndicator, Avatar, useTheme } from "react-native-paper";
import categories from "../../api/categories";

export default () => {
  return (
    <View>
      <Text className="text-xl font-bold p-4 pl-0 pb-2">Popular Categories</Text>

      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryAvatar item={item} />}
        keyExtractor={(item) => item.label}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const CategoryAvatar = ({ item }) => {
  const theme = useTheme();

  return (
    <Pressable className="flex flex-column items-center m-2">
      <Avatar.Image
        onLoad={() => (
          <ActivityIndicator
            animating={true}
            size="small"
            color={theme.colors.primary}
          />
        )}
        size={90}
        source={{ uri: item.icon }}
      />
      <Text
      className="text-md pt-2"
      >{item.label}</Text>
    </Pressable>
  );
};
