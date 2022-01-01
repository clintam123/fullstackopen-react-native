import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useHistory } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import SortingMenu from "./SortingMenu";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  setSortingCriteria,
  sorting,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  const history = useHistory();

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <SortingMenu
          setSortingCriteria={setSortingCriteria}
          sorting={sorting}
        />
      )}
      renderItem={({ item }) => (
        <Pressable onPress={() => history.push(`/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState("latest_repos");
  const { repositories } = useRepositories(sorting);

  return (
    <RepositoryListContainer
      repositories={repositories}
      setSortingCriteria={setSorting}
      sorting={sorting}
    />
  );
};

export default RepositoryList;
