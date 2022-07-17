import { React, useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BotTab from "./navigation/BotTab";
import AboutUs from "./frontend/AboutUs";
import Account from "./frontend/Account";
import EditProfile from "./frontend/EditProfile";

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
        <Stack.Screen name={"AboutUs"} component={AboutUs} />
        <Stack.Screen name={"EditProfile"} component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
