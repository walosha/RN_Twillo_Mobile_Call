import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AccordionList } from "accordion-collapse-react-native";
import list from "../helpData";
import LinearGradientBG from "../components/LinearGradientBG";
import HeaderNavigation from "../components/HeaderNavugation";

const HelpScreen = ({ navigation }) => {
  const [state, setState] = useState(list);
  function _head(item) {
    return <Text style={styles.title}>{item.title}</Text>;
  }

  function _body(item) {
    return (
      <View style={{ padding: 10 }}>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  }
  return (
    <>
      <HeaderNavigation
        primary
        route={navigation}
        notification
        NotificationCount={12}
        headerText="Olango"
      />
      <LinearGradientBG>
        <Text style={styles.headerText}>FAQ</Text>
        <AccordionList list={state} header={_head} body={_body} />
      </LinearGradientBG>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontFamily: "PlayfairDisplay-Bold",
    marginBottom: 20,
    marginTop: 40,
    color: "#e5dcdc",
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontFamily: "PlayfairDisplay-ExtraBold",
    marginBottom: 20,
    padding: 16,
    textAlign: "center",
    color: "#e5dcdc",
    borderWidth: 1,
    borderColor: "#fff",
    elevation: 1
  },
  body: {
    fontSize: 14,
    fontFamily: "quicksand-Light",
    color: "#000",
    lineHeight: 20,
    paddingVertical: 7,
    paddingHorizontal: 4,
    backgroundColor: "#fff"
  }
});

export default HelpScreen;
