import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutUs from "../frontend/AboutUs";
import EditProfile from "../frontend/EditProfile";
import ChangePass from "../frontend/ChangePass";
import ProjectDetail from "../frontend/ProjectDetail";
import Notification from "../frontend/Notification";
import Account from "../frontend/Account";

const Stack = createNativeStackNavigator();

const AccountStackNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="account" screenOptions={{ headerShown: false }}>         
        <Stack.Screen name={"account"} component={Account} />
        <Stack.Screen name={"AboutUs"} component={AboutUs} />
        <Stack.Screen name={"EditProfile"} component={EditProfile} />
        <Stack.Screen name={"ChangePass"} component={ChangePass}/>
    </Stack.Navigator>
  );
}

const ProjectStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Projects" screenOptions={{ headerShown: false }}>  
      <Stack.Screen name={"Project"} component={ProjectDetail} />
    </Stack.Navigator>
  );
}

const NotifStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="notification" screenOptions={{ headerShown: false }}>  
        <Stack.Screen name={"notification"} component={Notification} />
      </Stack.Navigator>
    );
  }

import colors from "../constants/colors";
// import ProjectList from "../frontend/ProjectList";

// const Tab = createBottomTabNavigator();
// const uiBottomList = [
//   { isSelected: false, iconName: "home", useName: "Home", componentName: Home },
//   {
//     isSelected: true,
//     iconName: "folder",
//     useName: "Projects",
//     componentName: Projects,
//   },
//   {
//     isSelected: false,
//     iconName: "account",
//     useName: "Account",
//     componentName: Account,
//   },
//   // {
//   //   isSelected: false,
//   //   iconName: "view-sequential",
//   //   useName: "Project List",
//   //   componentName: ProjectList,
//   // },
// ];

// export default function BotTab() {
//   const screenOptions = () => ({
//     headerShown: false,
//     tabBarActiveTintColor: colors.primary,
//     tabBarInactiveTintColor: colors.inactive,
//     tabBarActiveBackgroundColor: colors.mainBackground,
//     tabBarInactiveBackgroundColor: colors.mainBackground,
//   });
//   return (
//     <Tab.Navigator initialRouteName="Projects" screenOptions={screenOptions}>
//       {uiBottomList.map((each, index) => (
//         <Tab.Screen
//           key={index}
//           screenOptions={screenOptions}
//           name={each.useName}
//           component={each.componentName}
//           options={{
//             tabBarLabel: each.useName,
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name={each.iconName}
//                 color={color}
//                 size={size}
//               />
//             ),
//             tabBarStyle: {
//               borderTopWidth: 0,
//             },
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }


const Tab = createBottomTabNavigator();

const BotTab = () => {
  const screenOptions = () => ({
         headerShown: false,
         tabBarActiveTintColor: colors.primary,
         tabBarInactiveTintColor: colors.inactive,
         tabBarActiveBackgroundColor: colors.mainBackground,
        tabBarInactiveBackgroundColor: colors.mainBackground,
       });
  return (
    <Tab.Navigator initialRouteName="Projects" screenOptions={screenOptions}>
      <Tab.Screen name={"Projects"} component={ProjectStackNavigator} options= {{tabBarLabel: 'Project',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="folder" color={color} size={size}/>),}}/>
      <Tab.Screen name={"Notification"} component={NotifStackNavigator} options= {{tabBarLabel: 'Notification',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size}/>),}}/>
      <Tab.Screen name={"Account"} component={AccountStackNavigator} options= {{tabBarLabel: 'Account',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size}/>),}}/>

    </Tab.Navigator>
  );
};

export default BotTab;