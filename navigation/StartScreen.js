import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../frontend/SplashScreen';
import SignUpScreen from '../frontend/SignUpScreen';
import SignInScreen from '../frontend/SignInScreen';
const Stack = createNativeStackNavigator();

const StartScreen = ({navigation}) => (
    <Stack.Navigator headerMode='none' >
        <Stack.Screen options={{headerShown: false}} name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen options={{headerShown: false}} name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
);


export default StartScreen;