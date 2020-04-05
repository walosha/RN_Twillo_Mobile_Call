import React, { useState } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
//import { AppLoading } from "expo";
import Navigator from "./routes/routeRoute";
import { fonts } from "./fonts";

const getFonts = () => Font.loadAsync(fonts);

const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  } else {
    return (
      // <AppLoading
      //   startAsync={getFonts}
      //   onFinish={() => {
      //     setFontLoaded(true);
      //   }}
      // ></AppLoading>
      <View>
        <Text>Hello world</Text>
      </View>
    );
  }
};
export default App;
