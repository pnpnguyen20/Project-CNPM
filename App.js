import { React, useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BotTab from "./navigation/BotTab";

export default function App(props) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BotTab"
        screenOptions={{
          headerShown: false,
          // headerBackButtonMenuEnabled: true,
        }}
      >
        {/* <Stack.Screen name={"Projects"} component={Projects} /> */}
        <Stack.Screen name={"BotTab"} component={BotTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
