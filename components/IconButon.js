import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const IconButon = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

export default IconButon;

const styles = StyleSheet.create({
    
});
