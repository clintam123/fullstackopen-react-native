import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const sortCriteriaOptions = {
  latest_repos: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  highest_rated_repos: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
  lowest_rated_repos: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
};

const useRepositories = ({ sortCriteria, filter }) => {
  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { ...sortCriteriaOptions[sortCriteria], filter },
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
