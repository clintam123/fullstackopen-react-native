import React from "react";

import { View, ScrollView, Pressable, StyleSheet } from "react-native";

import Constants from "expo-constants";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { useHistory } from "react-router-native";

import theme from "../theme";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: "row",
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "white",
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Pressable style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();

  const { data } = useQuery(GET_AUTHORIZED_USER);
  const authorizedUser = data ? data.authorizedUser : undefined;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>
        {authorizedUser ? (
          <>
            <Link to="/review" component={AppBarTab}>
              Create a review
            </Link>
            <Link to="/my-reviews" component={AppBarTab}>
              My reviews
            </Link>
            <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
          </>
        ) : (
          <>
            <Link to="/sign-in" component={AppBarTab}>
              Sign in
            </Link>
            <Link to="/sign-up" component={AppBarTab}>
              Sign up
            </Link>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
