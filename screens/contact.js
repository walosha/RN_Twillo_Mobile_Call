import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import { Keypad } from "../components/keypad";

const Contact = ({ navigation }) => {
  const updateNumber = e => {
    console.log("updateNumber", updateNumber);
  };
  const onSubmit = e => {
    console.log("onSubmit", onSubmit);
  };
  let _thisNumber = null;
  let number = "";
  let numberInput;

  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        openDrawer={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <View style={styles.main}>
        <TextInput
          style={[styles.forminput, styles.numberinput]}
          onChangeText={e => updateNumber(e)}
          placeholder="User to call"
          initialValue={number}
          onSubmitEditing={e => onSubmit(e)}
          ref={component => (_thisNumber = component)}
          autoCapitalize="none"
          autoCorrect={false}
        />
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
  },
  forminput: {
    borderRadius: 4,
    padding: 5,
    marginBottom: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5
  },
  numberinput: {
    margin: 10
  }
});

export default Contact;
