import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    margin: 4,
    height: 50,
    paddingLeft: 6,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  errorTextInput: {
    height: 50,
    margin: 4,
    paddingLeft: 6,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? styles.errorTextInput : styles.textInput;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
