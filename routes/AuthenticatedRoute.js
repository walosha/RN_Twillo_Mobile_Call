import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeScreen";
import MyDrawer from "./drawerNavigatorroute";

const Stack = createStackNavigator();

const AuthenticatedRoute = () => {
  return (
    <MyDrawer>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </MyDrawer>
  );
};

export default AuthenticatedRoute;
