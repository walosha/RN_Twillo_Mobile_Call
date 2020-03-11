import React from "react";
import SignInAndSignUp from "../components/Sign-in-and-Sign-Up.component";

const signInScreen = ({ navigation }) => {
  return (
    <SignInAndSignUp
      navigation={navigation}
      mainText="Choose the best option that suits you"
      text="Up"
      hide
      route="SignUp"
    />
  );
};

export default signInScreen;
