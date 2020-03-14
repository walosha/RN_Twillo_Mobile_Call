import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ buttonText, onSubmit, inverted }) {
  inverted = inverted ? { backgroundColor: "#fff" } : {};
  const text = inverted ? { color: "red" } : {};
  return (
    <TouchableOpacity
      onPress={() => {
        onSubmit();
      }}
      style={{ ...styles.buttonContainer, ...inverted }}
    >
      <Text style={{ ...styles.text, ...text }}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 13,
    marginVertical: 8
  },
  text: {
    color: "#E20405",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: "#F5EDED",
    borderRadius: 22,
    fontFamily: "PlayfairDisplay-Medium"
  }
});

export default Button;
