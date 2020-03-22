import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import SettingCard from "../components/SettingCard";
import ScreenHeader from "../components/ScreenHeader";

const Settings = ({ navigation }) => (
  <View style={styles.main}>
    <HeaderNavigation openDrawer={navigation} />
    <ScreenHeader headerText="Settings" />
    <View style={styles.header}>
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

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f5d8e1",
    flex: 1,
    padding: 16
  },
  header: {
    backgroundColor: "#f5d8e1",
    flex: 1,
    padding: 10
  }
});

export default Settings;
