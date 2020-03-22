import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import HeaderNavigation from "../components/HeaderNavugation";
import SavedConversationPaper from "../components/SavedConversationPaper";
import ScreenHeader from "../components/ScreenHeader";
import AudiPlayer from "../components/audio/AudioPlayer";
const records = [1, 2, 3, 4, 5, 6, 7, 8, 8, 3, 4];

const SavedConversation = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5d8e1", padding: 18 }}>
      <HeaderNavigation
        openDrawer={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <ScreenHeader headerText="Saved Conversations" />
      <AudiPlayer />
      {/* <ScrollView style={styles.main}>
        {records.map((_, idx) => (
          <SavedConversationPaper key={idx} />
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20
  }
});

export default SavedConversation;
