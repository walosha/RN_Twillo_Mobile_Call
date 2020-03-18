import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import { Keypad } from "../components/keypad";

const Contact = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        openDrawer={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <View style={styles.main}>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "red" }}>
          DO NOT PRESS THE KEY PAD !
        </Text>
        <Keypad />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1
  }
});

export default Contact;
