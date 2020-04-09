import React, { useState,useEffect } from "react";
import  { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import SplashScreen from 'react-native-splash-screen'
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
    return <Navigator />;
  } else {
    return (
      <ActivityIndicator color='red' size='large'/>
    );
  }
};
export default App;
