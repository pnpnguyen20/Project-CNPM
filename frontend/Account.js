import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, Platform, StatusBar } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";

const Account = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={{ backgroundColor: colors.primary1, paddingTop: 60, paddingBottom: 30, borderBottomEndRadius: 20 }}>
          <View style={{ marginTop: 30, paddingHorizontal: 29, flexDirection: "row" }}>
            <Image style={styles.profile_pic} source={{ uri: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" }} />

            <View style={{ marginLeft: 30 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Trần Quang Thịnh </Text>
              <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '500', color: 'white' }}>tqthinh20@clc.fitus.edu.vn</Text>
            </View>
          </View>
        </View>


        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")}>
            <View style={styles.menuItem}>
              <Icon name="edit" color={colors.textColor} size={20} />
              <Text style={styles.menuItemText}>Profile infomation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ChangePass")}>
            <View style={styles.menuItem}>
              <Icon name="lock" color={colors.textColor} size={20} />
              <Text style={styles.menuItemText}>Change Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
            <View style={styles.menuItem}>
              <Icon name="info" color={colors.textColor} size={20} />
              <Text style={styles.menuItemText}>About Manager: Teams & Tasks</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="log-out" color={colors.textColor} size={20} />
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
    color: colors.textColor,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});