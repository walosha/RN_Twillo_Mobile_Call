import React from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import Profile from "../components/Profile";
import HomeScreen from "../screens/homeScreen";
import Settings from "../screens/settings";
import SavedConversation from "../screens/savedConversation";
import Contact from "../screens/contact";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        style={{
          flex: 1,
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          elevation: 5,
          paddingHorizontal: 12
        }}
        label={() => <Profile />}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        icon={() => <Image source={require("../assets/images/logout.png")} />}
        onPress={() => props.navigation.navigate("SignIn")}
      />
      <DrawerItem
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        label={() => (
          <View>
            <Text style={{ fontSize: 10 }}>powered by:</Text>
            <Text style={{ color: "red", fontWeight: "bold" }}>NCI GROUP</Text>
          </View>
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => CustomDrawerContent(props)}
      drawerStyle={{
        backgroundColor: "#e5dcdc",
        width: "100%"
      }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        itemStyle: {
          marginVertical: 7,
          marginRight: 57,
          borderTopRightRadius: 17,
          borderBottomRightRadius: 17,
          paddingVertical: 8
        },
        activeBackgroundColor: "#2E425D"
      }}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Home",
          drawerIcon: () => (
            <Image source={require("../assets/images/home.png")} />
          )
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Contacts",
          drawerIcon: () => (
            <Image source={require("../assets/images/contacts.png")} />
          )
        }}
        name="Contact"
        component={Contact}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "SavedConversation",
          drawerIcon: () => (
            <Image source={require("../assets/images/record-voice.png")} />
          )
        }}
        name="SavedConversation"
        component={SavedConversation}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Settings",
          drawerIcon: () => (
            <Image source={require("../assets/images/settings-gear.png")} />
          )
        }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
}
