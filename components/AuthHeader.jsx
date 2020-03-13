import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AuthHeader = ({ mainText }) => {
  return (
    <View>
      <View style={styles.imgContainter}>
        <Image
          style={{ height: "100%", width: "30%" }}
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainter: {
    height: 87,
    marginBottom: 10
  },
  mainTextContainer: {
    marginRight: "30%"
  },
  mainText: {
    color: "#F5EDED",
    fontSize: 27,
    fontFamily: "PlayfairDisplay-Italic"
  }
});

export default AuthHeader;
