import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SavedConversationPaper = () => {
  const [playing, setPlaying] = useState(false);
  function onMusicPress() {
    setPlaying(prev => !prev);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMusicPress} style={styles.iconContainter}>
        <FontAwesome color="#FFF" name={playing ? "music" : "play"} size={15} />
      </TouchableOpacity>
      <View style={styles.containerMiddle}>
        <Text style={styles.recordTitle}>Olango_Call_Record_1</Text>
        <Text style={styles.recordDate}>March 18, 2020</Text>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.recordTime}>17:30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
    padding: 17,
    borderRadius: 12,
    marginBottom: 7
  },
  constainerMiddle: {},
  containerLeft: {},
  recordTime: {},
  recordDate: {},
  recordTitle: {},
  iconContainter: {
    height: 46,
    width: 46,
    borderRadius: 23,
    backgroundColor: "#e31356",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SavedConversationPaper;
