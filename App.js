import { React, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BotTab from "./navigation/BotTab";

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
      </Stack.Navigator> */}

      <BotTab/>
      
    </NavigationContainer>
  );
}
