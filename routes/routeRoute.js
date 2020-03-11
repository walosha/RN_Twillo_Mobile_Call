import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signInScreen from "../screens/signInScreen";
import signUpScreen from "../screens/signUpScreen";
import LogInForm from "../screens/signInWithEmailScreen";
import LogUpForm from "../screens/signUpWithEmailScreen";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="SignIn" component={signInScreen} />
        <Stack.Screen name="SignUp" component={signUpScreen} />
        <Stack.Screen name="LogInForm" component={LogInForm} />
        <Stack.Screen name="LogUpForm" component={LogUpForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
