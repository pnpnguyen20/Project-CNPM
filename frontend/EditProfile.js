import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import colors from "../constants/colors";

import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = ({navigation}) => {

  const [image, setImage] = useState('https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.pngg');

  return (
    <SafeAreaView style={styles.container}>
      <View style = {{marginLeft: 30, marginRight:30}}>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Name"
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
          <Feather name="phone" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#dcdcdc"
            keyboardType="number-pad"
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
          <FontAwesome name="envelope-o" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#dcdcdc"
            keyboardType="email-address"
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
          <FontAwesome name="calendar" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Birth date"
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
          <Icon name="map-marker-outline" color={colors.inactive} size={20} />
          <TextInput
            placeholder="Address"
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

export default EditProfile;

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