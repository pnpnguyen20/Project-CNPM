import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Task = (props) => {
  return (
    <View
      style={{
        backgroundColor: colors.taskBackground,
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
          fontSize: 17,
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
            tintColor: colors.primary,
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
