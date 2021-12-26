import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab text={"Repositories"} />
        </Link>
        <Link to="/signin">
          <AppBarTab text={"Sign in"} />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
