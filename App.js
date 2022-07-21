import { React, useState } from "react";
import {StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BotTab from "./navigation/BotTab";
import StartScreen from "./navigation/StartScreen";

export default function App(props) {
  // const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      
        {/* <Stack.Navigator
        initialRouteName="BotTab"
        screenOptions={{
          headerShown: false,
          // headerBackButtonMenuEnabled: true,
        }}
      >
        <Stack.Screen name={"BotTab"} component={BotTab} />
      </Stack.Navigator>  */}
      {/* <StatusBar barStyle= 'light-content'/> */}
      <StartScreen/>
      {/* <BotTab/> */}
      
    </NavigationContainer>
  );
}
