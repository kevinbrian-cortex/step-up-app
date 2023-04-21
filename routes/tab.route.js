import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CatalogScreen from "../screens/CatalogScreen";
import { BottomNavigation, Text } from "react-native-paper";
import { View } from "react-native";

const ShopRoute = () => <Text>Shop</Text>;

const FavoriteRoute = () => <Text>Favorite</Text>;

const UserRoute = () => <Text>User</Text>;

function TabRoute() {
  //init index var to hold state
  const [index, setIndex] = React.useState(0);

  //state to keep and retrive routes
  const [routes] = React.useState([
    {
      key: "Home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "Shop",
      title: "shop-",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
    {
      key: "Favorite",
      title: "Favorite",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "User",
      title: "User",
      focusedIcon: "account",
      unfocusedIcon: "account",
    },
  ]);

  //sceneMap
  const renderScene = BottomNavigation.SceneMap({
    Home: HomeScreen,
    Shop: ShopRoute,
    Favorite: FavoriteRoute,
    User: UserRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      keyboardHidesNavigationBar={true}
    />
  );
}
export default TabRoute;
