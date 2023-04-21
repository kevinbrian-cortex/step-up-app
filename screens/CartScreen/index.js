import { Text, View } from "react-native";

export default CartScreen = () => {
  return (
    <View>
      <Text>Hello World Cart</Text>
    </View>
  );
};

CartScreen.navigationOptions = ({ navigation }) => ({
  headerShown: false,
  tabBarVisible: false,
});
