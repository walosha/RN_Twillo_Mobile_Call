import React from "react";
import { View, Text } from "react-native";
import TwilioVoice from "react-native-twilio-programmable-voice";

const PhoneCall = () => {
  // ...

  // initialize the Programmable Voice SDK passing an access token obtained from the server.
  // Listen to deviceReady and deviceNotReady events to see whether the initialization succeeded.
  async function initTelephony() {
    try {
      const accessToken = await getAccessTokenFromServer();
      const success = await TwilioVoice.initWithToken(accessToken);
    } catch (err) {
      console.err(err);
    }
  }
  // iOS Only
  function initTelephonyWithUrl(url) {
    TwilioVoice.initWithTokenUrl(url);
    try {
      TwilioVoice.configureCallKit({
        appName: "TwilioVoiceExample", // Required param
        imageName: "my_image_name_in_bundle", // OPTIONAL
        ringtoneSound: "my_ringtone_sound_filename_in_bundle" // OPTIONAL
      });
    } catch (err) {
      console.err(err);
    }
  }
  return (
    <View>
      <Text>PHONE CALL</Text>
    </View>
  );
};

export default PhoneCall;
