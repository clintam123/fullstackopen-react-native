import React from "react";
import { StyleSheet, Pressable } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  flexItem: {
    color: "white",
    paddingLeft: 10,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable onPress={() => console.log("Press")}>
      <Text style={styles.flexItem}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
