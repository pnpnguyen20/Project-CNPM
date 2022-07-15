import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, Platform, StatusBar} from "react-native";
import React from "react";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";

const About = () => {
    return (
      <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1, paddingLeft: 30}}>
        <Text>Manager: Teams & Tasks is the flexible work management tool that  will gather project’s information and indivitual tasks at one place with a user-friendly interface. Work, organize tasks anywhere, anytime, get the jobs done and increase productivity.</Text>
        <Text>This app is contributed by 5 members of Group 05 - 20CLC11:</Text>
        <Text>20127005 - </Text>
        <Text>20127317 - </Text>
        <Text>20127337 - </Text>
        <Text>20127... - </Text>
        <Text>20127... - </Text>
      </SafeAreaView>
    );
  };


export default About;