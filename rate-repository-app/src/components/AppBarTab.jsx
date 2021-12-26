import React from "react";
import { StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  flexItem: {
    color: "white",
    paddingLeft: 10,
  },
});

const AppBarTab = ({ text }) => {
  return <Text style={styles.flexItem}>{text}</Text>;
};

export default AppBarTab;
