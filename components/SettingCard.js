import React from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SettingCard = ({ mainText, text, switchBtn, route }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.main}>
      <View style={{ flex: 4 }}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={{ fontSize: 12 }}>{text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("pressed");
          navigate(route);
        }}
        style={styles.iconContainer}
      >
        {switchBtn ? (
          <Switch value={true} onValueChange={() => {}} onChange={() => {}} />
        ) : (
          <Ionicons color="#000" name="ios-arrow-forward" size={30} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 25,
    elevation: 4,
    marginBottom: 13,
    flexDirection: "row",
    borderRadius: 17
  },
  mainText: {
    fontSize: 17,
    color: "red"
  },
  iconContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});

export default SettingCard;
