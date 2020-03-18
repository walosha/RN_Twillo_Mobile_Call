import React, { useState } from "react";
import { View, Text, StyleSheet, Picker, TouchableOpacity } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import Button from "../components/Button";
import LanguageList from "../components/languageList";

const HomeScreen = ({ navigation }) => {
  const [participant, setParticipant] = useState(1);
  const [hidden, setHidden] = useState(true);

  const openLanguage = () => {
    setHidden(false);
  };
  const closeLanguage = () => {
    setHidden(true);
  };

  return (
    <View>
      <HeaderNavigation
        openDrawer={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <View style={styles.headerBG}>
        <Text style={styles.mainText}>Welcome!</Text>
        <Text style={styles.subText}>Let's get you up in seconds</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <View style={styles.container}>
            <Text style={styles.inputText}>Number of Participants</Text>
          </View>
          <Picker
            selectedValue={participant}
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#fff",
              elevation: 9,
              borderRadius: 8
            }}
            onValueChange={(itemValue, itemIndex) => {
              setParticipant(itemValue);
            }}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </View>
        <View>
          <View style={styles.container}>
            <Text style={styles.inputText}>Participant Languages</Text>
          </View>
          <View style={styles.selectedLang}></View>
        </View>
        <View>
          <TouchableOpacity style={{ padding: 6 }}>
            <Text onPress={openLanguage} style={styles.addLang}>
              Add Language
            </Text>
          </TouchableOpacity>
          <LanguageList hidden={hidden} closeLanguage={closeLanguage} />
        </View>
        <View style={{ padding: 7, marginTop: 20 }}>
          <Button
            route={navigation}
            routeName="onGoingCallScreen"
            inverted
            buttonText="START"
            onSubmit={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBG: {
    backgroundColor: "#2E425D",
    paddingHorizontal: 9,
    paddingVertical: 15
  },
  mainText: {
    color: "#fff",
    fontSize: 55,
    fontFamily: "PlayfairDisplay-ExtraBoldItalic"
  },
  subText: {
    color: "#707070",
    fontSize: 20,
    fontFamily: "quicksand-Bold"
  },
  container: { padding: 7 },
  content: {
    paddingVertical: 25,
    paddingHorizontal: 40
  },
  inputContainer: {
    padding: 6
  },
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
    height: 45,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 7
  }
});

export default HomeScreen;
