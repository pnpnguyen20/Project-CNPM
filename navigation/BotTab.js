import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Projects, Home, Account } from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const uiBottomList = [
  { isSelected: false, iconName: "home", useName: "Home", componentName: Home },
  {
    isSelected: true,
    iconName: "folder",
    useName: "Projects",
    componentName: Projects,
  },
  {
    isSelected: false,
    iconName: "account",
    useName: "Account",
    componentName: Account,
  },
];

export default function BotTab() {
  const screenOptions = () => ({
    headerShown: false,
    tabBarActiveTintColor: "#528ae6",
    tabBarInactiveTintColor: "#fff5",
    tabBarActiveBackgroundColor: "black",
    tabBarInactiveBackgroundColor: "black",
  });
  return (
    <Tab.Navigator initialRouteName="Projects" screenOptions={screenOptions}>
      {uiBottomList.map((each, index) => (
        <Tab.Screen
          key={index}
          screenOptions={screenOptions}
          name={each.useName}
          component={each.componentName}
          options={{
            tabBarLabel: each.useName,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={each.iconName}
                color={color}
                size={size}
              />
            ),
            // tabBarItemStyle: { borderWidth: 1, borderColor: "#101010" },
            tabBarStyle: {
              // paddingBottom: 0,
              // position: "absolute",
              // height: 50,
              // bottom: 35,
              borderTopWidth: 0,
              // borderTopColor: "#528ae6",
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
