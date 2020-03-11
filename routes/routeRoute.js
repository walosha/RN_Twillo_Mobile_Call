import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signInScreen from "../screens/signInScreen";
import signOutScreen from "../screens/signOutScreen";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer initialRouteName="SignOut">
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={signInScreen} />
        <Stack.Screen name="SignOut" component={signOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
