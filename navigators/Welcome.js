import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View } from "react-native";
import Home from "../screens/Home";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: null,
      }}
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
        component={Shop}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-cart-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Shop}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={Shop}
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

function Shop() {
  return (
    <View>
      <Text>Shop</Text>
    </View>
  );
}

function Cart() {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}
