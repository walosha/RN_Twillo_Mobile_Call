import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
  return (
    <View style={styles.main}>
      <Text>settings</Text>
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

export default Settings;
