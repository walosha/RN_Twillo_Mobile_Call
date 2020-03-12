import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={{ marginLeft: "auto" }}>
        <Text style={{ fontSize: 19, color: "red" }}>X</Text>
      </TouchableOpacity>
      <View style={styles.profile}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../assets/images/monica.jpg")}
          />
        </View>
        <View>
          <View>
            <Text style={styles.name}>KARL BENZ</Text>
          </View>
          <View>
            <Text style={styles.location}>Berlin, Germany </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginLeft: "auto" }}>
        <Image source={require("../assets/images/preferences.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  imgContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 10
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 25,
    color: "red",
    fontFamily: "PlayfairDisplay-Italic"
  },
  location: {
    fontSize: 10,
    fontFamily: "quicksand-Bold"
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 53
  }
});

export default Profile;
