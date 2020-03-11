import React from "react";
import SignInAndSignUp from "../components/Sign-in-and-Sign-Up.component";

const signInScreen = ({ navigation }) => {
  return (
    <SignInAndSignUp
      navigation={navigation}
      mainText="Welcome back to Olango"
      text="In"
      route="SignUp"
    />
  );
};

export default signInScreen;
