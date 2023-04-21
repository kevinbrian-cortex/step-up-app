import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FavoriteScreen from "../screens/FavoriteScreen";
import Home from "../screens/Home";
import CartNavigator from "./CartNavigator";

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
          // tabBarLabel: null,
        }
      }
      initialRouteName="Home"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#FFFF" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-cart-outline" color={color} size={26} />
          ),
          tabBarBadge: true,
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-person-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

