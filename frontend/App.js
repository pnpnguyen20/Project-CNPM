import { React, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BotTab from "./navigation/BotTab";
import StartScreen from "./navigation/StartScreen";
import SignInScreen from "./screens/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App(props) {
  const Stack = createNativeStackNavigator();
  return (
    // <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name={"StartScreen"} component={StartScreen} />
    //   {/* <Stack.Screen name={"BotTab"} component={BotTab} /> */}
    // </Stack.Navigator>
    //   <Stack.Navigator>
    //   {null == null ? (
    //     // No token found, user isn't signed in
    //     <Stack.Screen
    //       name="SignInScreen"
    //       component={SignInScreen}
    //       options={{
    //         title: 'Sign in',
    //         // When logging out, a pop animation feels intuitive
    //       }}
    //     />
    //   ) : (
    //     // User is signed in
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   )}
    // </Stack.Navigator>


    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"StartScreen"} component={StartScreen} />
        <Stack.Screen name={"BotTab"} component={BotTab} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

{/* <NavigationContainer>

<BotTab />

</NavigationContainer> */}
