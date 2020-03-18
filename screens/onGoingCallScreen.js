import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { height, width } = Dimensions.get("window");

const onGoingCallScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Text style={{ color: "#fff" }}>ONGOING CALL</Text>
      <Image
        source={require("../assets/Ongoing.png")}
        style={{ ...StyleSheet.absoluteFill }}
      />
    </View>
  );
};

export default onGoingCallScreen;
