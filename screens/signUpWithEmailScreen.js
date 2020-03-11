import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormInput from "../components/FormInputs";
import HeaderNavigation from "../components/HeaderNavugation";
import Button from "../components/Button";

export default function LogUpForm({ navigation }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function onChange(type, e) {
    setValues({ ...values, [type]: e });
  }

  function onSubmit() {
    if (!Loading) {
      const { password, confirmPassword } = values;
      setError(false);
      if (!(password === confirmPassword)) return setError(true);
      setLoading(true);
      setTimeout(function() {
        navigation.navigate("SignUp");
      }, 5000);
    }
  }
  return (
    <View>
      <HeaderNavigation
        navigation={navigation}
        route="SignUp"
        headerText="Sign Up"
      />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormInput onChange={e => onChange("email", e)} label="Email" />
          <FormInput
            onChange={e => onChange("password", e)}
            hideInput
            label="Create a password"
          />
          <FormInput
            onChange={e => onChange("confirmPassword", e)}
            hideInput
            label="Confirm password"
          />
          {error ? (
            <Text style={{ color: "red", paddingVertical: 1 }}>
              The passwords do not match
            </Text>
          ) : null}
        </View>

        <View>
          <Button
            onSubmit={onSubmit}
            color
            buttonText={Loading ? "Loading...." : " Sign Up with email"}
          />
        </View>
        <Text style={{ color: "#aaa", fontSize: 12 }}>
          Enter a combination of at least six numbers, letters and punctuation
          marks (like ! and & )
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 19
  },
  formContainer: {
    marginBottom: 30
  },
  text: {
    color: "red",
    textAlign: "center"
  }
});
