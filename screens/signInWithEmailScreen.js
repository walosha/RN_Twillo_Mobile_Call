import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../components/FormInputs";
import HeaderNavigation from "../components/HeaderNavugation";
import Button from "../components/Button";
import { AuthContext } from "../context/AuhContext";
import LinearGradientBG from "../components/LinearGradientBG";
import AuthHeader from "../components/AuthHeader";

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
    <LinearGradientBG>
      <View style={{ flex: 0.85, padding: 10 }}>
        <AuthHeader mainText="Please enter your email address and password" />
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormInput
              onChange={e => onChange("email", e)}
              label="Your email address"
            />
            <FormInput
              onChange={e => onChange("password", e)}
              hideInput
              label="Password"
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password ?</Text>
            </TouchableOpacity>
            <Button
              onSubmit={onSubmit}
              color
              buttonText={Loading ? "Loading...." : "Log In"}
            />
            {Loading ? <View style={styles.overlay}></View> : null}
          </View>
        </View>
      </View>
    </LinearGradientBG>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 19
  },
  formContainer: {
    marginBottom: 30
  },
  text: {
    color: "#fff",
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
