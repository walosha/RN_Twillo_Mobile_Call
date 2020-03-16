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
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
          <Text>Hello World!</Text>
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
