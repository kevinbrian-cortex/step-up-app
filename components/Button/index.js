import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

//with icon
export function ButtonPrimaryWithIcon({ icon, text, onPress }) {
  return (
    <TouchableOpacity className="bg-blue p-8 pb-2 pt-2 m-4 rounded-xl flex-row align-center justify-center">
      <Text className="text-white fond-bold text-lg pr-2">ADD TO CART</Text>
      <Ionicons name="add" size={26} color={"white"} />
    </TouchableOpacity>
  );
}

// with no icon
export function ButtonPrimary({ icon, text, onPress }) {
  return (
    <TouchableOpacity className="bg-slate-900 p-8 pb-2 pt-2 m-4 rounded-xl flex-row align-center justify-center">
      <Text className="text-white fond-bold text-lg pr-2">ADDED TO CART</Text>
      <Ionicons name="checkmark" size={26} color={"white"} />
    </TouchableOpacity>
  );
}

// with outline
export function ButtonPrimaryOutline({ icon, text, onPress }) {
  return (
    <TouchableOpacity className="p-8 pb-2 pt-2 m-4 rounded-xl flex-row align-center justify-center border-blue border-2">
      <Text className="text-blue fond-bold text-lg pr-2">DON'T SAVE</Text>
    </TouchableOpacity>
  );
}

//Secondary
export function ButtonSecondary({ text, onPress, bgColor, textColor }) {
  return (
    <TouchableOpacity
      className={`p-4 pb-2 pt-2 m-1 rounded-xl flex-row align-center justify-center border-blue bg-${bgColor}`}
    >
      <Text className={`text-${textColor} fond-bold text-lg pr-2`}>{text}</Text>
    </TouchableOpacity>
  );
}

//Increment and descrement button
export function ButtonIncrement({ icon, text, onPress }) {
  return (
    <View className="shadow-lg ring-2 ring-slate-900 flex-row align-center justify-center items-center bg-white p-4 pb-1 pt-1 border rounded-full">
      <Pressable>
        <Ionicons name="add" size={26} color={"black"} />
      </Pressable>
      <Text className="p-2">1</Text>
      <Pressable>
        <Ionicons name="remove" size={26} color={"black"} />
      </Pressable>
    </View>
  );
}
