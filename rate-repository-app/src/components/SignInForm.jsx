import React from "react";
import { View, Button } from "react-native";

import FormikTextInput from "./FormikTextInput";

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextExtry />
      <Button onPress={onSubmit} title="Sign In" />
    </View>
  );
};

export default SignInForm;
