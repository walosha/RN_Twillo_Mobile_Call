import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HeaderNavigation = ({ route, headerText, navigation, primary }) => {
  primary = primary ? "#0A0E18" : "#F5EDED";

  return (
    <View style={{ ...styles.headerContainer, backgroundColor: primary }}>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <View style={{ paddingLeft: 20, paddingRight: "10%" }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/images/Hamburger.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 35,
    flexDirection: "row",
    backgroundColor: "#F5EDED",
    marginBottom: 4
  },
  headerText: {
    marginLeft: 30,
    width: "50%",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 19,
    paddingBottom: 9,
    fontWeight: "bold"
  }
});

export default HeaderNavigation;
