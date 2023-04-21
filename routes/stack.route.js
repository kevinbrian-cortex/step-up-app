import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CatalogScreen from "../screens/CatalogScreen";

//init stack
const Stack = createNativeStackNavigator();

function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={CatalogScreen} />
    </Stack.Navigator>
  );
}
export default StackRoute;
