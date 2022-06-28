import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { React, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Task from "./Task";
import BoardModal from "./BoardModal";
import tempData from "../tempData";

const Board = (props) => {
  const [task, setTask] = useState({ text: "" });
  const [taskItems, setTaskItems] = useState([]);

  const [boardModalVisible, setBoardModalVisible] = useState(false);

  const handleAddTask = () => {
    // console.log(tempData[0].tasks[0]);
    setTaskItems([...taskItems, task]);
    setTask({ text: "" });
    setIsSelectCreate(false);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const [isSelectCreate, setIsSelectCreate] = useState(false);

  const scrollRef = useRef();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
      style={{
        marginTop: 18,
        backgroundColor: "#1c1c1e",
        width: 350,
        marginHorizontal: 5,
        flexDirection: "column",
        borderRadius: 6,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginStart: 15,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginStart: 5,
            opacity: 0.5,
          }}
        >
          {taskItems.length}
        </Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          onPress={() => {
            setBoardModalVisible(true);
          }}
        >
          <Entypo
            name={"dots-three-horizontal"}
            style={{
              color: "#fff8",
              fontSize: 22,
              marginEnd: 15,
            }}
          />
        </TouchableOpacity>
        <BoardModal
          isVisible={boardModalVisible}
          styles={{
            backgroundColor: "#2c2c2e",
            width: 230,
            position: "absolute",
            top: 145 + useSafeAreaInsets().top,
            right: "5%",
            borderRadius: 15,
          }}
          // addBoard={handleAddBoard}
          close={() => {
            setBoardModalVisible(!boardModalVisible);
          }}
          handleDeleteBoard={props.handleDeleteBoard}
          id={props.id}
        />
      </View>
      <ScrollView
        style={{}}
        ref={scrollRef}
        onContentSizeChange={(contentW, contentH) => {
          scrollRef.current.scrollTo({ y: contentH, animated: true });
        }}
      >
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                completeTask(index);
              }}
            >
              <Task
                text={item.text}
                projectName={props.projectName.toUpperCase()}
                index={index + 1}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/*  */}
      {isSelectCreate ? (
        <TextInput
          style={{
            color: "#fff",
            fontSize: 18,
            marginStart: 15,
            marginVertical: 12,
            paddingVertical: 5,
            paddingLeft: 5,
          }}
          placeholder={"Issue summary"}
          placeholderTextColor="#fff5"
          value={task.text}
          onChangeText={(newText) => setTask({ text: newText })}
          onSubmitEditing={() => {
            if (task.text != null && task.text != "") handleAddTask();
          }}
          autoFocus={true} // sau khi an +create => hien textinput & focus
          onBlur={() => Keyboard.dismiss()}
          // keybo
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setIsSelectCreate(true);
          }}
        >
          <Text
            style={{
              color: "#528ae6",
              fontSize: 18,
              marginStart: 15,
              marginTop: 12,
              marginBottom: 16,
              position: "relative",
            }}
          >
            + &nbsp;Create
          </Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default Board;
