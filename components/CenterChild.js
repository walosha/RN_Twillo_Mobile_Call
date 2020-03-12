import React from "react";
import { View, StyleSheet } from "react-native";

const CenterChild = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CenterChild;
