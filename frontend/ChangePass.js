import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import colors from "../constants/colors";

import { SafeAreaView } from "react-native-safe-area-context";

const ChangePass = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {{marginLeft: 30, marginRight:30}}>
        <View style={styles.action}>
          <Feather name="lock" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Enter current password"
            placeholderTextColor="#dcdcdc"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "white",
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="lock" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Enter new password"
            placeholderTextColor="#dcdcdc"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "white",
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="lock" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Confirm new password"
            placeholderTextColor="#dcdcdc"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "white",
              },
            ]}
          />
        </View>
        
        <View style = {{flexDirection: "column", alignSelf: "center", marginVertical: 30}}>
          <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate("BotTab")}>
            <Text style={styles.panelButtonTitle}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate("BotTab")}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
        
    </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: colors.mainBackground
  },
  commandButton: {
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

export default ChangePass;