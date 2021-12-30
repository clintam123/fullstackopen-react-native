import React from "react";
import { View, ScrollView, Pressable, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import theme from "../theme";
import Text from "./Text";

import { AUTHORIZED_USER } from "../graphql/queries";
import AuthStorageContext from "../contexts/AuthStorageContext";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient, useQuery } from "@apollo/client";

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
  const authStorage = useAuthStorage(AuthStorageContext);
  const apolloClient = useApolloClient();

  const { loading, data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  const handleLogOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (loading) return <Text>Loading...</Text>;
  console.log(data);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>
        {!data.authorizedUser ? (
          <Link to="/sign-in" component={AppBarTab}>
            Sign in
          </Link>
        ) : (
          <Link to="/" component={AppBarTab} onPress={handleLogOut}>
            Sign out
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
