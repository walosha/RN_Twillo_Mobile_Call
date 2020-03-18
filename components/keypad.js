import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class KeypadButton extends React.Component {
  render() {
    var touchableProps = {},
      letters;
    touchableProps.onPress = function() {
      var digit = this.props.txt1;
      if (this.props.txt1 == "*") digit = 10;
      if (this.props.txt1 == "#") digit = 11;
      this.props.onPress(parseInt(digit));
    }.bind(this);
    touchableProps.onPressIn = this.props.onPressIn;
    touchableProps.onPressOut = this.props.onPressOut;
    touchableProps.onLongPress = this.props.onLongPress;

    if (this.props.txt2 != "") {
      letters = (
        <Text style={[styles.letters, { alignSelf: "center" }]}>
          {this.props.txt2}
        </Text>
      );
    }

    return (
      <TouchableOpacity {...touchableProps}>
        <View style={[this.props.style, { flexDirection: "column" }]}>
          <Text style={[styles.digits, { alignSelf: "center" }]}>
            {this.props.txt1}
          </Text>
          {letters}
        </View>
      </TouchableOpacity>
    );
  }
}

class Keypad extends React.Component {
  handleKeypadPressed(value) {
    this.props.keyPressed(value);
  }

  render() {
    return (
      <View style={styles.keypad}>
        <View style={styles.keypadrow}>
          <KeypadButton
            style={styles.keypadbutton}
            txt1="1"
            txt2=""
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="2"
            txt2="A B C"
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="3"
            txt2="D E F"
            onPress={e => this.handleKeypadPressed(e)}
          />
        </View>
        <View style={styles.keypadrow}>
          <KeypadButton
            style={styles.keypadbutton}
            txt1="4"
            txt2="G H I"
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="5"
            txt2="J K L"
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="6"
            txt2="M N O"
            onPress={e => this.handleKeypadPressed(e)}
          />
        </View>
        <View style={styles.keypadrow}>
          <KeypadButton
            style={styles.keypadbutton}
            txt1="7"
            txt2="P Q R S"
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="8"
            txt2="T U V"
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="9"
            txt2="W X Y Z"
            onPress={e => this.handleKeypadPressed(e)}
          />
        </View>
        <View style={styles.keypadrow}>
          <KeypadButton
            style={styles.keypadbutton}
            txt1="*"
            txt2=""
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="0"
            txt2="+"
            onPress={e => this.handleKeypadPressed(e)}
          />
          <KeypadButton
            style={styles.keypadbutton}
            txt1="#"
            txt2=""
            onPress={e => this.handleKeypadPressed(e)}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
