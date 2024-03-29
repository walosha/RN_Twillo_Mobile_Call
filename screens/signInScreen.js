import React from "react";
import SignInAndSignUp from "../components/Sign-in-and-Sign-Up";

const SignInScreen = ({ navigation }) => (
  <SignInAndSignUp
    navigation={navigation}
    mainText="Welcome back to Olango"
    text="In"
    route="LogInForm"
    hide="SignUp"
  />
);

export default SignInScreen;
