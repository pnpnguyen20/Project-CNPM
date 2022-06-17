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

import { React, useState } from "react";
import Task from "./Task";

const Board = (props) => {
  const [task, setTask] = useState({ text: "" });
  const [taskItems, setTaskItems] = useState([
    { text: "this is a task" },
    {
      text: "this is another task eeeeeeeeeeeeeeeeeeeeeee",
    },
    { text: "more..." },
  ]);

  const handleAddTask = () => {
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
      style={{
        marginTop: 18,
        backgroundColor: "#1c1c1e",
        width: 280,
        marginHorizontal: 20,
        flexDirection: "column",
        maxHeight: 500,
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
          TO DO
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
        <TouchableOpacity>
          <Entypo
            name={"dots-three-horizontal"}
            style={{
              color: "#fff8",
              fontSize: 22,
              marginEnd: 15,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
      // ref={(ref) => (this.scrollView = ref)}
      // onContentSizeChange={() => this.scrollToEnd({ animated: true })}
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
