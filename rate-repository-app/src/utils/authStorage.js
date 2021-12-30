import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  getAccessToken() {
    // Get the access token for the storage
    const accessToken = await AuthStorage.getItem(
      `${this.namespace}:accessToken`
    );

    return accessToken ? JSON.parse(accessToken) : null;
  }

  setAccessToken(accessToken) {
    // Add the access token to the storage
    console.log(accessToken);
    await AuthStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  removeAccessToken() {
    // Remove the access token from the storage
    await AuthStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
