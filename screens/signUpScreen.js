import React from "react";
import SignInAndSignUp from "../components/SignInAndSignUp";

const SignUpScreen = ({ navigation }) => (
  <SignInAndSignUp
    navigation={navigation}
    mainText="Choose the best option that suits you"
    text="Up"
    route="LogUpForm"
    hide="SignIn"
  />
);

export default SignUpScreen;
