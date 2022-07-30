import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  const tempNotiData = [
    {
      src: require("../assets/prj_icon.png"),
      title: "Team leader add new task to Project 1",
      time: "Jul 13 at 10:00"
    },
    {
      src: require("../assets/anya.png"),
      title: "Team leader add new task",
      time: "Jul 13 at 10:00"
    }
  ]
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.mainBackground,
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 25,
      }}>


      <View style={{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        marginBottom: 35,

      }}>
        <Text style={{ color: colors.textColor, fontSize: 30, fontWeight: 'bold' }}>
          Notifications
        </Text>
        <TouchableOpacity style={{ right: 0, position: "absolute" }}>
          <Image source={require("../assets/anya.png")} style={{ borderRadius: 50, width: 55, height: 55 }} />
        </TouchableOpacity>
      </View>

      {tempNotiData.map((item, index) =>
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: 'row',

            alignItems: 'center',
            backgroundColor: colors.primary3,
            borderRadius: 15,
            marginBottom: 10,
          }}>
          <Image source={item.src}
            style={{
              width: 65,
              height: 65,
              marginRight: 20,
              margin: 10,
              borderRadius: 50,
            }} />
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: 17,
              color: colors.textColor,
              alignContent: 'center',
              margin: 5,
            }}>
              {item.title}
            </Text>
            <Text style={{
              fontSize: 14, color: colors.textColor, alignContent: 'center', margin: 4,
              opacity: .75,
            }}>
              {item.time}
            </Text>
          </View>
        </TouchableOpacity>)
      }

    </SafeAreaView>
  );
};

export default Notification;
