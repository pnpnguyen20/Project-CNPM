import { React, useCallback, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";

import { Board, tempData } from "../components";

import { PopUpModal } from "../components/PopUpModal";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";

export default function ProjectDetail({ route, navigation }) {
  const [projectName, setProjectName] = useState(route.params.projectName);
  const [selectedBoard, setSelectedBoard] = useState([true, false, false]);

  const scrollRef1 = useRef();

  const [modalVisible, setModalVisible] = useState(false);

  const [boards, setBoards] = useState(route.params.boards);
  const handleAddBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: new Date().getTime() % 1e6,
        projectName: "",
        title: title ? title.toUpperCase() : "NEW COLUMN",
        tasks: [{ id: new Date().getTime() % 1e6, text: "this is a task" }],
      },
    ]);

    setTimeout(() => {
      scrollRef1.current.scrollToEnd({ animated: true });
    }, 150);
  };

  const handleRenameBoard = (id, newName) => {
    const temp = [...boards];
    temp.forEach((b) => {
      if (b.id == id)
        b.title = newName
    });

    setBoards(temp)
  };

  const handleDeleteBoard = (id) => {
    const filteredData = boards.filter((item) => item.id !== id);
    setBoards(filteredData);
  };

  const renderItem = ({ item, index }) => (
    <Board
      id={item.id}
      projectName={projectName}
      title={item.title}
      handleDeleteBoard={handleDeleteBoard}
      handleRenameBoard={handleRenameBoard}
      tasks={route.params.boards[index] ? route.params.boards[index].tasks : []}
    />
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.mainBackground,
        flex: 1,
        flexDirection: "column",
        paddingTop: 10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 45,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => {
          navigation.navigate("ProjectList")
        }}>
          <Entypo
            name={"arrow-long-left"}
            style={{
              color: colors.primary1,
              fontSize: 25,
              marginTop: 5,
              marginHorizontal: 30,

            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
            marginHorizontal: 30,
          }}
        >
          <Text style={{ color: colors.primary1, fontSize: 22, fontWeight: 'bold' }}>
            {projectName}
          </Text>
          <Icon
            name={"caret-down"}
            style={{
              marginLeft: 5,
              color: colors.primary1,
              fontSize: 18,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Entypo
            name={"menu"}
            style={{
              color: colors.primary1,
              fontSize: 35,
              marginTop: 5,
              marginHorizontal: 22,
            }}
          />
        </TouchableOpacity>
        <PopUpModal
          isVisible={modalVisible}
          styles={{
            backgroundColor: colors.primary3,
            width: 230,
            top: 40 + useSafeAreaInsets().top,
            right: 10,
            position: "absolute",
            borderRadius: 10,
          }}
          addBoard={handleAddBoard}
          close={() => {
            setModalVisible(false);
          }}
        />
      </View>

      {/* item2 */}
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
        }}
      >

      </View>
      {/* item3 */}

      <FlatList
        ref={scrollRef1}
        initialNumToRender={4}
        style={{ maxHeight: 500, flexGrow: 0, marginLeft: 20 }}
        horizontal
        scrollEnabled
        data={boards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
      </View>
      {/* a line */}
      <View
        style={{
          backgroundColor: "#fff",
          opacity: 0.15,
          height: 1,
          marginVertical: 10,
          width: "100%",
        }}
      />
    </SafeAreaView>
  );
}
