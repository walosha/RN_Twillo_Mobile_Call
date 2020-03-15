import React, { useReducer, Fragment } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CenterChild from "../components/CenterChild";
import signInScreen from "../screens/signInScreen";
import signUpScreen from "../screens/signUpScreen";
import LogInForm from "../screens/signInWithEmailScreen";
import LogUpForm from "../screens/signUpWithEmailScreen";
import AuthenticatedRoute from "../routes/AuthenticatedRoute";
import { authReducer, initialState } from "../context/Authreducer";
import { AuthContext } from "../context/AuhContext";

const Stack = createStackNavigator();

function Navigator() {
  const [state, dispatch] = useReducer(authReducer, initialState);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
      } catch (e) {}
      dispatch({ type: "RESTORE_TOKEN", token: null });
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async data => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      }
    }),
    []
  );

  if (state.loading)
    return (
      <CenterChild>
        <ActivityIndicator color="red" size="large" />
      </CenterChild>
    );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          screenOptions={{
            header: () => null
          }}
          initialRouteName="SignIn"
        >
          {state.userToken === null ? (
            // No token found, user isn't signed in
            <Fragment>
              <Stack.Screen
                initialRouteName={true}
                name="SignIn"
                component={signInScreen}
                options={{
                  title: "Sign in",
                  animationTypeForReplace: state.isSignout ? "pop" : "push"
                }}
              />
              <Stack.Screen name="SignUp" component={signUpScreen} />
              <Stack.Screen name="LogInForm" component={LogInForm} />
              <Stack.Screen name="LogUpForm" component={LogUpForm} />
            </Fragment>
          ) : (
            //  User is signed in
            <Stack.Screen
              name="HomeScreen"
              component={AuthenticatedRoute}
            ></Stack.Screen>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export default Navigator;
