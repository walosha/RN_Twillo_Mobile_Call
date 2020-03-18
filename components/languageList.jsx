import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const row1 = [
  { country: "South Africa", flag: require("../assets/flags/sa.png") },
  { country: "UK", flag: require("../assets/flags/uk.png") },
  { country: "USA", flag: require("../assets/flags/usa.png") },
  { country: "Ghana", flag: require("../assets/flags/ghana.png") },
  { country: "Canada", flag: require("../assets/flags/canada.png") },
  { country: "Mexico", flag: require("../assets/flags/mexico.png") }
];
const row2 = [
  { country: "Senegal", flag: require("../assets/flags/senegal.png") },
  { country: "France", flag: require("../assets/flags/france.png") },
  { country: "Argentina", flag: require("../assets/flags/arg.png") },
  { country: "Senega", flag: require("../assets/flags/senegal.png") },
  { country: "Sweden", flag: require("../assets/flags/sweden.png") },
  { country: "Zimbabwe", flag: require("../assets/flags/zimba.png") }
];

const LanguageList = ({ hidden, closeLanguage }) => {
  function closeLang() {
    closeLanguage();
  }

  if (hidden) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 12,
        elevation: 3
      }}
    >
      <TouchableOpacity onPress={closeLang}>
        <Text
          style={{
            marginLeft: "auto",
            paddingHorizontal: 9,
            fontWeight: "bold",
            textDecorationLine: "underline"
          }}
        >
          close
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {row1.map((country, idx) => (
          <TouchableOpacity
            key={idx}
            style={{ height: 25, width: 25, marginRight: 10 }}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              source={country.flag}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {row2.map((country, idx) => (
          <TouchableOpacity
            key={idx}
            style={{ height: 25, width: 25, marginRight: 10 }}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              source={country.flag}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LanguageList;
