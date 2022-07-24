import { React, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BotTab from "./navigation/BotTab";
import StartScreen from "./navigation/StartScreen";
import ProjectList from "./frontend/ProjectList";

export default function App(props) {
  // const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      {/* <BotTab /> */}
      {/* <Stack.Navigator
        initialRouteName="BotTab"
        screenOptions={{
          headerShown: false,
          // headerBackButtonMenuEnabled: true,
        }}
      >
        <BotTab />
        
      </Stack.Navigator> */}
      {/* <Stack.Screen name={"BotTab"} component={BotTab} /> */}
      {/* <StatusBar barStyle='light-content' /> */}
      <StartScreen/>
      {/* <BotTab /> */}

    </NavigationContainer>
  );
}
