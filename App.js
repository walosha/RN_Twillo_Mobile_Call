import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./routes/routeRoute";

export default function App() {
  return <Navigator />;
}
