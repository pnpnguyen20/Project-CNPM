import { View, Image, Text, TouchableOpacity} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/Feather";

const About = ({navigation}) => {
    return (
      <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1, flexDirection: "column",}}>
        <View style={{flexDirection: "row", height: 65, alignItems: "center", paddingBottom: 10}}>
          
          <TouchableOpacity onPress={() => navigation.navigate("account")}> 
            <Icon name={"chevron-left"} style={{color: colors.primary, fontSize: 30, marginLeft: 20, width: 50}}/>
          </TouchableOpacity>

          <Text style = {{color: "white", fontSize: 20, justifyContent: "center", flexDirection: "row",}}>About Us</Text>
        </View>

        <View style = {{ marginHorizontal: 20}}> 
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 15}}>Manager: Teams & Tasks is the flexible work management tool that will gather project’s information and indivitual tasks at one place with a user-friendly interface. Work, organize tasks anywhere, anytime, get the jobs done and increase productivity.</Text>
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 5}}>This app is contributed by 5 members of Group 05 - 20CLC11:</Text>
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 5}}>   20127005 - </Text>
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 5}}>   20127317 - </Text>
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 5}}>   20127337 - Trần Quang Thịnh</Text>
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 5}}>   20127... - </Text>
          <Text style = {{fontSize: 15, color: 'white', paddingBottom: 5}}>   20127... - </Text> 
        </View>
                 
      </SafeAreaView>
    );
  };


export default About;