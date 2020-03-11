import React from "react";
import { View, Text, StyleSheet } from "react-native";

const signOutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Sign-Out Screen</Text>
    </View>
  );
};

export default signOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E18",
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    color: "#F5EDED",
    fontSize: 27
  }
});
