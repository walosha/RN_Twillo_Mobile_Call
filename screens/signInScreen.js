import React from "react";
import { View, Text, StyleSheet } from "react-native";

const signInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigation.navigate("SignOut")}
        style={styles.mainText}
      >
        Sign-In Screen
      </Text>
    </View>
  );
};

export default signInScreen;

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
