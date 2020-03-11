import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SignInAndSignUp = ({ navigation, mainText, text, route, hide }) => {
  return (
    <View style={styles.maincontainer}>
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
          <TouchableOpacity onPress={() => navigation.navigate(route)}>
            {hide ? null : (
              <Text style={styles.text}>you don't have an account ?</Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={{ height: 35 }}
            source={require("../assets/Olango.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInAndSignUp;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#0A0E18",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 16
  },
  imgContainter: {
    height: 87,
    marginBottom: 10
  },
  mainTextContainer: {
    marginRight: "30%"
  },
  mainText: {
    color: "#F5EDED",
    fontSize: 27
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
    borderRadius: 22
  },
  text: {
    color: "#fff",
    textAlign: "center"
  }
});
