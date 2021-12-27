import React from "react";
import { Formik } from "formik";
import { View, Button, StyleSheet } from "react-native";

import FormikTextInput from "./FormikTextInput";

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextExtry={true}
      />
      <Button onPress={onSubmit} title="Sign In" />
    </View>
  );
};

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
