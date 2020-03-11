import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/routeRoute";

const getFonts = () =>
  Font.loadAsync({
    "PlayfairDisplay-Black": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Black.ttf"),
    "PlayfairDisplay-BlackItalic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-BlackItalic.ttf"),
    "PlayfairDisplay-Bold": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf"),
    "PlayfairDisplay-BoldItalic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"),
    "PlayfairDisplay-ExtraBold": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-ExtraBold.ttf"),
    "PlayfairDisplay-ExtraBoldItalic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-ExtraBoldItalic.ttf"),
    "PlayfairDisplay-Italic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf"),
    "PlayfairDisplay-Medium": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-MediumItalic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-MediumItalic.ttf"),
    "PlayfairDisplay-Regular": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-SemiBold": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf"),
    "PlayfairDisplay-SemiBoldItalic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-SemiBoldItalic.ttf"),
    "quicksand-Bold": require("./assets/fonts/quicksand/static/Quicksand-Bold.ttf"),
    "quicksand-Light": require("./assets/fonts/quicksand/static/Quicksand-Light.ttf"),
    "quicksand-Bold": require("./assets/fonts/quicksand/static/Quicksand-Bold.ttf"),
    "quicksand-Medium": require("./assets/fonts/quicksand/static/Quicksand-Medium.ttf"),
    "quicksand-Regular": require("./assets/fonts/quicksand/static/Quicksand-Regular.ttf"),
    "quicksand-SemiBold": require("./assets/fonts/quicksand/static/Quicksand-SemiBold.ttf")
  });

const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      ></AppLoading>
    );
  }
};
export default App;
