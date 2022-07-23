import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { React, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Task from "./Task";
import BoardModal from "./BoardModal";
import colors from "../../constants/colors";
import { TaskModal } from "../PopUpModal";


const Board = (props) => {
  const [task, setTask] = useState({ text: "" });
  const [taskItems, setTaskItems] = useState([]);

  const [boardModalVisible, setBoardModalVisible] = useState(false);
  const [taskModalVisible, setTaskModalVisible] = useState(false)
  const [clickedID, setClickedID] = useState();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      id={item.id}
      onPress={() => {
        setClickedID(item.id);
        setTaskModalVisible(true)
      }}>
      <Task
        text={item.text}
        memberName={"Nguyen Van An"}
      />
    </TouchableOpacity>

  );

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask({ text: "" });
    setIsSelectCreate(false);

    setTimeout(() => {
      scrollRef.current.scrollToEnd({ animated: true });
    }, 150);
  };

  const handleDeleteTask = (id) => {
    const filteredData = taskItems.filter((item) => item.id !== id);
    setTaskItems(filteredData);
  };
  const [isSelectCreate, setIsSelectCreate] = useState(false);

  const scrollRef = useRef();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
      style={{
        marginTop: 18,
        backgroundColor: colors.primary3,
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
          marginBottom: 5,
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
              marginEnd: 5,
              padding: 12,
            }}
          />
        </TouchableOpacity>
        <BoardModal
          isVisible={boardModalVisible}
          styles={{
            backgroundColor: colors.primary3,
            width: 230,
            position: "absolute",
            top: 145 + useSafeAreaInsets().top,
            right: "5%",
            borderRadius: 15,
          }}
          close={() => {
            setBoardModalVisible(!boardModalVisible);
          }}
          handleDeleteBoard={props.handleDeleteBoard}
          handleRenameBoard={props.handleRenameBoard}
          id={props.id}
        />
      </View>


      <TaskModal
        isVisible={taskModalVisible}
        styles={{
          backgroundColor: colors.primary3,
          width: 230,
          position: "absolute",
          top: 145 + useSafeAreaInsets().top,
          right: "5%",
          borderRadius: 15,
        }}
        close={() => {
          setTaskModalVisible(!taskModalVisible);
        }}
        handleDeleteTask={handleDeleteTask}
        id={clickedID}
      />


      <FlatList
        ref={scrollRef}
        scrollEnabled
        data={taskItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />


      {isSelectCreate ? (
        <TextInput
          style={{
            color: colors.textColor,
            fontSize: 18,
            marginStart: 15,
            marginVertical: 12,
            paddingVertical: 5,
            paddingLeft: 5,
          }}
          placeholder={"Issue summary"}
          placeholderTextColor="#fff5"
          value={task.text}
          onChangeText={(newText) => setTask({ id: new Date().getTime() % 1e6, text: newText })}
          onSubmitEditing={() => {
            if (task.text != null && task.text != "") handleAddTask();
          }}
          autoFocus={true}
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
              color: colors.primary,
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
