import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

import { View, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";

const UiHeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 16,
      }}
    >
      <Text
        style={{
          color: props.isSelected ? colors.primary : colors.inactive,
          fontSize: 18,
        }}
      >
        {props.name}
      </Text>
      <View
        style={{
          backgroundColor: props.isSelected ? colors.primary : null,
          height: 3,
          borderRadius: 10,
          marginTop: 6,
        }}
      />
    </TouchableOpacity>
  );
};

export default UiHeaderButton;
