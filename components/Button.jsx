import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ buttonText, onSubmit, inverted, route, routeName }) {
  inverted = inverted ? { backgroundColor: "red", color: "#fff" } : {};
  console.log("route", route);
  return (
    <TouchableOpacity
      onPress={() => {
        onSubmit();
        route === "string" ? null : route.navigate(routeName);
      }}
      style={styles.buttonContainer}
    >
      <Text style={{ ...styles.text, ...inverted }}>{buttonText}</Text>
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
