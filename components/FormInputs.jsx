import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function FormInput({ label, hideInput, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }
  function handleBlur() {
    setIsFocused(true);
  }
  function textChange(text) {
    onChange(text);
  }

  const labelStyle = {
    position: "absolute",
    left: 20,
    top: !isFocused ? 35 : 0,
    fontSize: !isFocused ? 16 : 14,
    color: !isFocused ? "#aaa" : "#fff"
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={hideInput}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={textChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
    paddingTop: 18
  },
  label: {
    fontSize: 15,
    color: "#c9bfbf"
  },
  input: {
    borderWidth: 0.6,
    borderRadius: 22,
    height: 26,
    fontSize: 20,
    color: "#fff",
    height: 50,
    width: "auto",
    borderColor: "#fff",
    textAlign: "center"
  }
});
