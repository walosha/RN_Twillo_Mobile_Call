import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SavedConversation = () => {
  return (
    <View style={styles.main}>
      <Text> SavedConversation</Text>
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

export default SavedConversation;
