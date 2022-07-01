import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Projects, Home, Account } from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";

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
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.mainBackground,
    tabBarInactiveBackgroundColor: colors.mainBackground,
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
            tabBarStyle: {
              borderTopWidth: 0,
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
