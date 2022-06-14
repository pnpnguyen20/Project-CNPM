import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Projects, Dashboards, Home, Issues, Notifications } from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//import { UIBottomButton } from "../components";

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
    iconName: "checkbox-multiple-marked-outline",
    useName: "Issues",
    componentName: Issues,
  },
  {
    isSelected: false,
    iconName: "credit-card",
    useName: "Dashboards",
    componentName: Dashboards,
  },
  {
    isSelected: false,
    iconName: "bell",
    useName: "Notifications",
    componentName: Notifications,
  },
];

export default function BotTab() {
  const screenOptions = () => ({
    headerShown: false,
    tabBarActiveTintColor: "#528ae6",
    tabBarInactiveTintColor: "#fff5",
    tabBarActiveBackgroundColor: "black",
    tabBarInactiveBackgroundColor: "black",
    // tabb,
  });
  return (
    <Tab.Navigator initialRouteName="Projects" screenOptions={screenOptions}>
      {uiBottomList.map((each) => (
        <Tab.Screen
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
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
