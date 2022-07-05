import { View, Button, Text, Image, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import colors from "../constants/colors";

const Account = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <View style = {{paddingBottom: 25, paddingHorizontal: 30}}>
        <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Trần Quang Thịnh </Text>
        <Text style = {{fontSize: 14, lineHeight: 14, fontWeight: '500', color: 'white'}}>@tqthinh20</Text>
      </View>
    </SafeAreaView>
  );
};


export default Account;
