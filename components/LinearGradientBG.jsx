import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientBG = ({ children }) => {
  return (
    <LinearGradient
      colors={["#0A0E18", "#2E425D"]}
      style={styles.maincontainer}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    padding: 26,
    flex: 1,
    justifyContent: "flex-end"
  }
});
export default LinearGradientBG;
