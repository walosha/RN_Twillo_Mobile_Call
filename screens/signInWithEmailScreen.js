import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../components/FormInputs";
import HeaderNavigation from "../components/HeaderNavugation";
import Button from "../components/Button";
import { AuthContext } from "../context/AuhContext";

export default function LogInForm({ navigation }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [Loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  function onChange(type, e) {
    setValues({ ...values, [type]: e });
  }

  const onSubmit = function() {
    if (!Loading) {
      setLoading(true);
      signIn(values);
      setTimeout(function() {
        navigation.navigate("HomeScreen");
      }, 5000);
    }
  };

  return (
    <View>
      <HeaderNavigation
        navigation={navigation}
        route="SignIn"
        headerText="Sign In"
      />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormInput onChange={e => onChange("email", e)} label="Email" />
          <FormInput
            onChange={e => onChange("password", e)}
            hideInput
            label="Password"
          />
        </View>
        <View>
          <Button
            onSubmit={onSubmit}
            color
            route="HomeScreen"
            buttonText={Loading ? "Loading...." : "Log In"}
          />
          {Loading ? <View style={styles.overlay}></View> : null}
          <TouchableOpacity>
            <Text style={styles.text}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
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
  },
  overlay: {
    backgroundColor: "#0A0E18",
    opacity: 0.5,
    height: 47,
    width: "100%",
    position: "absolute",
    zIndex: 5
  }
});
