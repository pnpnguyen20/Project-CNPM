import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#2c2c2e",
        marginHorizontal: 10,
        marginTop: 8,
        paddingHorizontal: 7,
        // paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 6,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 17,
          // lineHeight: 15,
          marginTop: 8,
          marginBottom: 12,
        }}
      >
        {props.text}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 15,
            height: 15,
            alignSelf: "center",
            marginRight: 5,
            marginBottom: 5,
          }}
          source={require("../../assets/check.png")}
        />
        <Text
          style={{
            color: "white",
            fontSize: 13,
            opacity: 0.5,
          }}
        >
          {props.projectName}-{props.index}
        </Text>
      </View>
    </View>
  );
};

export default Task;
