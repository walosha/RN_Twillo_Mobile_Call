import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";

const SavedConversation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        openDrawer={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <View style={styles.main}>
        <Text> SavedConversation</Text>
      </View>
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
