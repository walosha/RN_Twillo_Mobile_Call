import React from "react";
import SignInAndSignUp from "../components/Sign-in-and-Sign-Up.component";

const signInScreen = ({ navigation }) => (
  <SignInAndSignUp
    navigation={navigation}
    mainText="Choose the best option that suits you"
    text="Up"
    route="LogUpForm"
    hide="SignIn"
  />
);

export default signInScreen;
