import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Text from "./Text";

const kFormatter = (num) => {
  return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    paddingBottom: 10,
    backgroundColor: "white",
    flexDirection: "row",
  },
  smallImage: {
    flexGrow: 0,
    padding: 10,
  },
  flexItemB: {
    paddingTop: 3,
    flexGrow: 0,
    borderColor: "black",
    alignItems: "flex-start",
  },
  repoStats: {
    paddingLeft: 25,
    width: "25%",
    justifyContent: "center",
  },
  repoLanguage: {
    backgroundColor: "#0366d6",
    color: "white",
    padding: 2,
    borderRadius: 2,
    alignSelf: "flex-start",
  },
  smallLogo: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <View style={styles.flexContainer}>
        <View style={styles.smallImage}>
          <Image
            style={styles.smallLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text fontWeight="bold" style={styles.repoLanguage}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.repoStats}>
          <Text fontWeight="bold">{kFormatter(item.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.repoStats}>
          <Text fontWeight="bold">{kFormatter(item.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.repoStats}>
          <Text fontWeight="bold">{kFormatter(item.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.repoStats}>
          <Text fontWeight="bold">{kFormatter(item.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
