import React, { useState } from "react";
import * as Font from "expo-font";
//import { AppLoading } from "expo";
import Navigator from "./routes/routeRoute";
import { fonts } from "./fonts";

const getFonts = () => Font.loadAsync(fonts);

const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      // <AppLoading
      //   startAsync={getFonts}
      //   onFinish={() => {
      //     setFontLoaded(true);
      //   }}
      // ></AppLoading>
      <Navigator />
    );
  }
};
export default App;
