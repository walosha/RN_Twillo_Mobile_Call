import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ buttonText, onSubmit }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onSubmit();
      }}
      style={styles.buttonContainer}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#0A0E18",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 25
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    color: "white"
  }
});

export default Button;
