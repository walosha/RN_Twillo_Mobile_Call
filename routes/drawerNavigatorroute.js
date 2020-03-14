import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
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
import { AuthContext } from "../context/AuhContext";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props, signOut) {
  const { navigation } = props;
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
        label={() => <Profile navigation={navigation} />}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        icon={() => <Image source={require("../assets/images/logout.png")} />}
        onPress={async () => {
          await signOut();
          navigation.navigate("HomeScreen", { screen: "SignIn" });
        }}
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
  const { signOut } = useContext(AuthContext);
  return (
    <Drawer.Navigator
      drawerContent={props => CustomDrawerContent(props, signOut)}
      drawerStyle={{
        backgroundColor: "#F5EDED",
        width: "90%"
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
        activeBackgroundColor: "#2E425D",
        inactiveTintColor: "#000"
      }}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons color={color} name="ios-home" size={30} />
          )
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Contacts",
          drawerIcon: ({ color }) => (
            <AntDesign color={color} name="contacts" size={30} />
          )
        }}
        name="Contact"
        component={Contact}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "SavedConversation",
          drawerIcon: ({ color }) => (
            <Feather color={color} name="phone-call" size={30} />
          )
        }}
        name="SavedConversation"
        component={SavedConversation}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <AntDesign color={color} name="setting" size={30} />
          )
        }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
}
