import { React, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BotTab from "./navigation/BotTab";
import StartScreen from "./navigation/StartScreen";

export default function App(props) {

  return (

    <NavigationContainer>

      <BotTab />

    </NavigationContainer>
  );
}
