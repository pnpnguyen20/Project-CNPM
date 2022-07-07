import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, Platform, StatusBar} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";

const Account = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {{paddingTop: 60, paddingBottom:30}}>
          <View style = {{marginTop: 30, paddingHorizontal: 29, flexDirection: "row"}}>
            <Image style = {styles.profile_pic} source = {{uri: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" }}/>
            
            <View style = {{marginLeft: 30}}>
              <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Trần Quang Thịnh </Text>
              <Text style = {{fontSize: 14, lineHeight: 14, fontWeight: '500', color: 'white'}}>tqthinh20@clc.fitus.edu.vn</Text>
            </View>  
          </View>
          
          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}> 
                <Icon name = "edit" color="white" size = {20} />
                <Text style={styles.menuItemText}>Edit profile</Text>
              </View>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name = "lock" color="white" size = {20} />
                <Text style={styles.menuItemText}>Change Password</Text>
              </View>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name = "log-out" color="white" size = {20} />
                <Text style={styles.menuItemText}>Log out</Text>
              </View>
            </TouchableOpacity>
          
          </View>
      </ScrollView> 
    </SafeAreaView>
  );
};


export default Account;
const styles = StyleSheet.create({
  profile_pic: {
    height: 70,
    width: 70,
    borderRadius: 50,
    bottom: 10
  },
  menuWrapper: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'white',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});