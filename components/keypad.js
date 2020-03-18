import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const KeypadButton = ({
  txt1,
  txt2,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  style
}) => {
  let touchableProps = {};
  let letters;

  touchableProps.onPress = function() {
    let digit = txt1;
    if (txt1 == "*") digit = 10;
    if (txt1 == "#") digit = 11;
    onPress(parseInt(digit));
  };
  touchableProps.onPressIn = onPressIn;
  touchableProps.onPressOut = onPressOut;
  touchableProps.onLongPress = onLongPress;

  if (txt2 != "") {
    letters = (
      <Text style={[styles.letters, { alignSelf: "center" }]}>{txt2}</Text>
    );
  }

  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[style, { flexDirection: "column" }]}>
        <Text style={[styles.digits, { alignSelf: "center" }]}>{txt1}</Text>
        {letters}
      </View>
    </TouchableOpacity>
  );
};

const Keypad = ({ keyPressed }) => {
  const handleKeypadPressed = value => {
    keyPressed(value);
  };

  return (
    <View style={styles.keypad}>
      <View style={styles.keypadrow}>
        <KeypadButton
          style={styles.keypadbutton}
          txt1="1"
          txt2=""
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="2"
          txt2="A B C"
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="3"
          txt2="D E F"
          onPress={e => handleKeypadPressed(e)}
        />
      </View>
      <View style={styles.keypadrow}>
        <KeypadButton
          style={styles.keypadbutton}
          txt1="4"
          txt2="G H I"
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="5"
          txt2="J K L"
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="6"
          txt2="M N O"
          onPress={e => handleKeypadPressed(e)}
        />
      </View>
      <View style={styles.keypadrow}>
        <KeypadButton
          style={styles.keypadbutton}
          txt1="7"
          txt2="P Q R S"
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="8"
          txt2="T U V"
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="9"
          txt2="W X Y Z"
          onPress={e => handleKeypadPressed(e)}
        />
      </View>
      <View style={styles.keypadrow}>
        <KeypadButton
          style={styles.keypadbutton}
          txt1="*"
          txt2=""
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="0"
          txt2="+"
          onPress={e => handleKeypadPressed(e)}
        />
        <KeypadButton
          style={styles.keypadbutton}
          txt1="#"
          txt2=""
          onPress={e => handleKeypadPressed(e)}
        />
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  keypad: {
    marginTop: 0,
    marginBottom: 10
  },
  keypadrow: {
    flexDirection: "row",
    alignSelf: "center"
  },
  keypadbutton: {
    margin: 10,
    width: 70,
    height: 70,
    borderWidth: 0.5,
    borderColor: "#2B2B2B",
    borderRadius: 35,
    paddingTop: 7
  },
  digits: {
    fontFamily: "PlayfairDisplay-ExtraBold",
    fontSize: 36
  },
  letters: {
    fontFamily: "PlayfairDisplay-ExtraBold",
    marginTop: -5,
    fontSize: 8
  }
});

export { Keypad, KeypadButton };
