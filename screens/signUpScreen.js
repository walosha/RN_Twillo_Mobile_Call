import React from "react";
import SignInAndSignUp from "../components/Sign-in-and-Sign-Up";

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
