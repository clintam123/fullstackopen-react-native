import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";

import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useHistory } from "react-router-native";
import { logCurrentStorage } from "../utils/authStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage(AuthStorageContext);
  const [mutate, { data }] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();
  let history = useHistory();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    logCurrentStorage();
    apolloClient.clearStore();
    history.push("/");
  };

  return [signIn, data];
};

export default useSignIn;
