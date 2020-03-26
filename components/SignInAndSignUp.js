import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradientBG from "./LinearGradientBG";

export default SignInAndSignUp = ({
  navigation,
  mainText,
  text,
  route,
  hide
}) => {
  return (
    <LinearGradientBG>
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
        <View style={styles.authContainter}>
          <TouchableOpacity style={styles.signInContainter}>
            <Text style={styles.signInText}>Sign {text} Wth Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(route)}
            style={styles.signInContainter}
          >
            <Text style={styles.signInText}>Log {text} Using Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(hide)}>
            <Text style={styles.text}>
              {hide === "SignUp"
                ? "Register here !"
                : "you already have an account ?"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 4 }}>
          <Image
            style={{ height: 35 }}
            source={require("../assets/images/Olango.png")}
          />
        </View>
      </View>
    </LinearGradientBG>
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
  },
  authContainter: {
    marginVertical: 18
  },

  signInContainter: {
    marginHorizontal: 13,
    marginVertical: 8
  },
  signInText: {
    color: "#E20405",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: "#F5EDED",
    borderRadius: 22,
    fontFamily: "PlayfairDisplay-Medium"
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "PlayfairDisplay-BlackItalic"
  }
});
