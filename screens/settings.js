import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import SettingCard from "../components/SettingCard";

const Settings = () => {
  return (
    <View style={styles.main}>
      <HeaderNavigation />
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <View style={{ justifySelf: "center", alignSelf: "center" }}>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View style={{ height: 57, width: 57, marginLeft: "auto" }}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <SettingCard
            mainText="Enable Human Translator"
            text="Turn On The allow Human translator"
            switchBtn
          />
          <SettingCard
            mainText="Set Translation Language"
            text="Default: English"
          />
          <SettingCard
            mainText="Caller Preferred Language"
            text="Default: English"
          />
          <SettingCard
            route="HelpScreen"
            mainText="Helps"
            text="Let us help you get started"
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "red", fontWeight: "bold" }}>Olango</Text>
          <Text style={{ fontSize: 10 }}>Version 1.0.1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F5EDED",
    flex: 1,
    padding: 16
  },
  header: {
    backgroundColor: "#F5EDED",
    flex: 1,
    padding: 10
  },
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

export default Settings;
