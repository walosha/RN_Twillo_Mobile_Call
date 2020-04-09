<<<<<<< HEAD
import React, { useState } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
//import { AppLoading } from "expo";
=======
import React, { useState,useEffect } from "react";
import  { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import SplashScreen from 'react-native-splash-screen'
>>>>>>> b4expo
import Navigator from "./routes/routeRoute";
import { fonts } from "./fonts";



const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);

  useEffect(()=>{
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    Font.loadAsync(fonts);
    setFontLoaded(true)
    SplashScreen.hide()
  },[])
  if (fontsLoaded) {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  } else {
    return (
<<<<<<< HEAD
      // <AppLoading
      //   startAsync={getFonts}
      //   onFinish={() => {
      //     setFontLoaded(true);
      //   }}
      // ></AppLoading>
      <View>
        <Text>Hello world</Text>
      </View>
=======
      <ActivityIndicator color='red' size='large'/>
>>>>>>> b4expo
    );
  }
};
export default App;
