import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

import { View, Text } from "react-native";
import React from "react";

const UiHeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 16,
      }}
    >
      <Text
        style={{
          color: props.isSelected ? "#528ae6" : "#7b7b7d",
          fontSize: 18,
        }}
      >
        {props.name}
      </Text>
      <View
        style={{
          backgroundColor: props.isSelected ? "#528ae6" : null,
          height: 3,
          borderRadius: 10,
          marginTop: 6,
        }}
      />
    </TouchableOpacity>
  );
};

export default UiHeaderButton;
