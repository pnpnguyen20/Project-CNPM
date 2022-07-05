import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import colors from "../constants/colors";

const Account = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {{paddingBottom:30}}>
          <View style = {{marginTop: 29, paddingHorizontal: 29}}>
            <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Trần Quang Thịnh </Text>
            <Text style = {{fontSize: 14, lineHeight: 14, fontWeight: '500', color: 'white'}}>tqthinh20@clc.fitus.edu.vn</Text>
          </View>
          
          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <Text style={styles.menuItemText}>Edit information</Text>
              </View>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
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
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});