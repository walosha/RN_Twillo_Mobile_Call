import React from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

export default function App({ modalVisible, openModal }) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: 300,
            height: 300
          }}
        >
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
        </View>
        <TouchableHighlight onPress={openModal}>
          <Text
            style={{
              fontSize: 33,
              color: "red"
            }}
          >
            Hide Modal
          </Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
}
