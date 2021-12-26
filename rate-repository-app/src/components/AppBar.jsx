import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    paddingBottom: Constants.statusBarHeight,
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <Link to="/">
        <AppBarTab text={"Repositories"} />
      </Link>
      <Link to="/signin">
        <AppBarTab text={"Sign in"} />
      </Link>
    </View>
  );
};

export default AppBar;
