import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderNavigation = ({ route, headerText, navigation, color }) => {
  /* 
if color is added as a prop the background is red 
and text is white else navigation gets a default style
*/
  const styledNav = color ? { backgroundColor: "#0A0E18", color: "#fff" } : {};

  return (
    <View style={{ ...styles.headerContainer, ...styledNav }}>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <View style={{ paddingLeft: 20, paddingRight: "10%" }}>
          <Ionicons
            color={color ? "#fff" : "#000"}
            name="ios-arrow-back"
            size={30}
          />
        </View>
      </TouchableOpacity>
      <Text style={{ ...styles.headerText, ...styledNav }}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 35,
    flexDirection: "row",
    backgroundColor: "#fff"
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
