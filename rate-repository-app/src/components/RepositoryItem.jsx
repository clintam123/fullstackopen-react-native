import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Button,
  Linking,
  FlatList,
} from "react-native";
import { useParams } from "react-router-native";

import theme from "../theme";
import Text from "./Text";
import formatInThousands from "../utils/formatInThousands";
import formatDate from "../utils/formatDate";
import useRepository from "../hooks/useSingleRepository";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  countItem: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  languageText: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  separator: {
    height: 10,
  },
  reviewRatingContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderColor: theme.colors.primary,
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewRatingText: {
    color: "blue",
    textAlign: "center",
  },
});

const CountItem = ({ label, count, id }) => {
  return (
    <View style={styles.countItem}>
      <Text
        style={styles.countItemCount}
        fontWeight="bold"
        testID={`${id}/${label}`}
      >
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryInfo = ({ repository, singleView }) => {
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = repository;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
            testID={`${id}/fullName`}
          >
            {fullName}
          </Text>
          <Text
            style={styles.descriptionText}
            color="textSecondary"
            testID={`${id}/description`}
          >
            {description}
          </Text>
          {language ? (
            <View style={styles.languageContainer}>
              <Text style={styles.languageText} testID={`${id}/lang`}>
                {language}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <CountItem count={stargazersCount} label="Stars" id={id} />
        <CountItem count={forksCount} label="Forks" id={id} />
        <CountItem count={reviewCount} label="Reviews" id={id} />
        <CountItem count={ratingAverage} label="Rating" id={id} />
      </View>
      {singleView && (
        <Button
          onPress={() => {
            Linking.openURL(url);
            console.log(press);
          }}
          title="Open in Github"
        />
      )}
    </View>
  );
};

const ReviewItem = ({ review }) => {
  const { id, text, rating, createdAt, user } = review;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.reviewRatingContainer}>
          <Text style={styles.reviewRatingText}>{rating}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {user.username}
          </Text>
          <Text
            style={styles.descriptionText}
            color="textSecondary"
            testID={`${id}/description`}
          >
            {formatDate(createdAt)}
          </Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItem = ({
  repository,
  reviews = [],
  handleFetchMore,
  loading,
  singleView = false,
}) => {
  return reviews.length ? (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={
        <RepositoryInfo repository={repository} singleView={singleView} />
      }
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
    />
  ) : (
    <RepositoryInfo repository={repository} singleView={singleView} />
  );
};

export default RepositoryItem;
