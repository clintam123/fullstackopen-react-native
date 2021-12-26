import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    paddingBottom: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBarTab text={"Repositories"} />
    </View>
  );
};

export default AppBar;
