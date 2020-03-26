import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Button from "../components/Button";

const { height, width } = Dimensions.get("window");

const OnGoingCallScreen = ({ navigation }) => {
  const onCallStop = function() {
    navigation.navigate("HomeScreen");
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "#000", justifyContent: "flex-end" }}
    >
      <View style={{ ...StyleSheet.absoluteFill, marginTop: 40 }}>
        <Image source={require("../assets/images/Ongoing.png")} />
      </View>
      <View
        style={{
          height: (height * 2) / 5,
          backgroundColor: "#000"
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "quicksand-Bold",
            textAlign: "center"
          }}
        >
          On Going Session...
        </Text>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Button
            onSubmit={onCallStop}
            inverted
            color
            routeName="HomeScreen"
            buttonText="END"
          />
        </View>
      </View>
    </View>
  );
};

export default OnGoingCallScreen;
