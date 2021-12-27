import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./SignInForm";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
