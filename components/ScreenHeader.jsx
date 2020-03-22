import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ScreenHeader = ({ headerText }) => {
  return (
    <View style={styles.titleHeader}>
      <View style={{ justifySelf: "center", alignSelf: "center" }}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      <View style={{ height: 57, width: 57, marginLeft: "auto" }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../assets/icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    flexDirection: "row",
    padding: 6,
    marginBottom: 5
  },
  headerText: {
    color: "#000",
    fontSize: 25
  }
});

export default ScreenHeader;
