import React, { useState } from "react";
import { Modal, Text, View, TouchableOpacity, Pressable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

const BoardModal = (props) => {
  return (
    <Modal animationType="none" transparent={true} visible={props.isVisible}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          props.close();
        }}
      >
        <View>
          <View style={props.styles}>
            <View
              style={{
                flexDirection: "column",
                shadowOpacity: 0.75,
                shadowRadius: 75,
              }}
            >
              <TouchableOpacity
                style={{ marginVertical: 10, paddingLeft: 15 }}
                onPress={() => {
                  props.close();
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Rename column
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 0.5,
                  backgroundColor: "white",
                  opacity: 0.5,
                }}
              />
              <TouchableOpacity
                style={{ marginVertical: 10, paddingLeft: 15 }}
                onPress={() => {
                  props.close();
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Move column right
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 0.5,
                  backgroundColor: "white",
                  opacity: 0.5,
                }}
              />
              <TouchableOpacity
                style={{ marginVertical: 10, paddingLeft: 15 }}
                onPress={() => {
                  props.close();
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Set column limit
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 0.5,
                  backgroundColor: "white",
                  opacity: 0.5,
                }}
              />
              <TouchableOpacity
                style={{ marginVertical: 10, paddingLeft: 15, fontSize: 15 }}
                onPress={() => {
                  props.handleDeleteBoard(props.id);
                  props.close();
                }}
              >
                <Text
                  style={{
                    color: "#de3131",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Delete column
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default BoardModal;
