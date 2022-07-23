import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import colors from "../../constants/colors";

const Task = (props) => {
  return (
    <View
      style={{
        backgroundColor: colors.primary4,
        marginHorizontal: 10,
        marginBottom: 8,
        paddingHorizontal: 7,
        paddingBottom: 5,
        borderRadius: 6,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          marginTop: 8,
          marginBottom: 12,
        }}
      >
        {props.text}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{
            width: 14,
            height: 14,
            marginRight: 5,
            marginBottom: 5,
            tintColor: colors.primary1,
          }}
          source={require("../../assets/check.png")}
        />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            opacity: 0.5,
          }}
        >
          {props.memberName}
        </Text>
      </View>
    </View>
  );
};

export default Task;
