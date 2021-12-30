import { useApolloClient, useMutation } from "@apollo/client";

import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    const payload = await mutate({ variables: { credentials } });
    const { data } = payload;

    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }

    return payload;
  };

  return [signIn, result];
};

export default useSignIn;
