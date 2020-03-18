import React, { useState } from "react";
import { View, Text, StyleSheet, Picker, TouchableOpacity } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import Button from "../components/Button";
import Modal from "../components/Modal";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(prev => !prev);
  };
  console.log("homescreen", navigation);

  return (
    <View>
      <HeaderNavigation
        openDrawer={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <Modal openModal={openModal} modalVisible={modalVisible} />
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
            selectedValue="Java"
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#fff",
              elevation: 9,
              borderRadius: 8
            }}
            onValueChange={(itemValue, itemIndex) => {}}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
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
            <Text onPress={openModal} style={styles.addLang}>
              Add Language
            </Text>
          </TouchableOpacity>
        </View>
        <View>
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
    paddingVertical: 59,
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
