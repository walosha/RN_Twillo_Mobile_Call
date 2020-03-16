import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HeaderNavigation = ({
  route,
  headerText,
  openDrawer,
  primary,
  notification,
  NotificationCount
}) => {
  primary = primary ? "#0A0E18" : "#F5EDED";

  return (
    <View style={{ ...styles.headerContainer, backgroundColor: primary }}>
      <TouchableOpacity
        onPress={() => {
          openDrawer.openDrawer();
        }}
      >
        <View style={{ paddingLeft: 10, paddingRight: "10%" }}>
          <Ionicons color="#000" name="ios-menu" size={35} />
        </View>
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerText}</Text>
      {notification ? (
        <View>
          {NotificationCount < 1 || NotificationCount === undefined ? null : (
            <View style={styles.countBody}>
              <Text style={styles.count}>{NotificationCount}</Text>
            </View>
          )}
          <Feather color="#000" name="bell" size={45} />
        </View>
      ) : null}
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
  },
  count: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold"
  },
  countBody: {
    position: "absolute",
    zIndex: 4,
    top: 0,
    right: "5%",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 50
  }
});

export default HeaderNavigation;
