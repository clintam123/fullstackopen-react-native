import React from "react";
import { Text, View } from "react-native";

const properties = [
  "Id",
  "Full name",
  "Description",
  "Language",
  "Stars",
  "Forks",
  "Reviews",
  "Rating",
  "OwnerAvatarUrl",
];

const RepositoryItem = ({ item }) => {
  return (
    <>
      {Object.values(item).map((e, index) => (
        <Text key={index}>
          {properties[index]}: {e}
        </Text>
      ))}
    </>
  );
};

export default RepositoryItem;
