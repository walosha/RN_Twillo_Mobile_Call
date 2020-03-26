import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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

const LanguageList = () => {
  const [hidden, setHidden] = useState(true);
  const [SelectedLng, setSelectedLng] = useState([]);

  const openLanguage = () => {
    setHidden(false);
  };
  const closeLanguage = () => {
    setHidden(true);
  };
  function closeLang() {
    closeLanguage();
  }
  console.log(SelectedLng);
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text style={styles.inputText}>Participant Languages</Text>
        </View>
        <View style={styles.selectedLang}>
          {SelectedLng.length >= 1
            ? SelectedLng.map(({ flag }) => (
                <TouchableOpacity
                  key={flag}
                  style={{ height: 25, width: 25, marginRight: 10 }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={flag}
                  />
                </TouchableOpacity>
              ))
            : null}
        </View>
      </View>
      <View>
        <TouchableOpacity style={{ padding: 6 }}>
          <Text onPress={openLanguage} style={styles.addLang}>
            Add Language
          </Text>
        </TouchableOpacity>
      </View>
      {hidden ? null : (
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
                onPress={() => setSelectedLng([...SelectedLng, country])}
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
                onPress={() => setSelectedLng([...SelectedLng, country])}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={country.flag}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: 7 },
  inputText: {
    fontSize: 16,
    color: "#2E425D",
    fontFamily: "quicksand-Bold"
  },
  addLang: {
    fontSize: 14,
    color: "#2E423D",
    padding: 4,
    textDecorationLine: "underline",
    fontFamily: "quicksand-Bold"
  },
  selectedLang: {
    //flex: 1,
    flexDirection: "row",
    height: 45,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 7
  }
});

export default LanguageList;
