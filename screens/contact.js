import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Contact = () => {
  return (
    <View style={styles.main}>
      <Text>Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default Contact;
