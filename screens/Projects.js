import { React, useCallback, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";

import { UiHeaderButton, Board, tempData } from "../components";

import PopUpModal from "../components/PopUpModal";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";

export default function Projects(props) {
  const [projectName, setProjectName] = useState("new-project");
  const [selectedBoard, setSelectedBoard] = useState([true, false, false]);

  const scrollRef1 = useRef();

  const [modalVisible, setModalVisible] = useState(false);

  const [boards, setBoards] = useState(tempData);
  const handleAddBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: new Date().getTime() % 1e5,
        projectName: "",
        title: title ? title.toUpperCase() : "NEW COLUMN",
        tasks: [{ text: "this is a task" }],
      },
    ]);

    setTimeout(() => {
      scrollRef1.current.scrollToEnd({ animated: true });
    }, 100);
  };
  const handleDeleteBoard = (id) => {
    const filteredData = boards.filter((item) => item.id !== id);
    setBoards(filteredData);
  };

  const renderItem = ({ item }) => (
    <Board
      id={item.id}
      projectName={projectName}
      title={item.title}
      handleDeleteBoard={handleDeleteBoard}
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
      {/* item 1 */}
      <View
        style={{
          flexDirection: "row",
          height: 45,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity>
          <Icon
            name={"chevron-left"}
            style={{
              color: colors.primary,
              fontSize: 18,
              marginLeft: 20,
              width: 55,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
            marginHorizontal: 40,
          }}
        >
          <Text style={{ color: colors.primary, fontSize: 20 }}>
            {projectName}
          </Text>
          <Icon
            name={"caret-down"}
            style={{
              marginLeft: 5,
              color: colors.primary,
              fontSize: 16,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={"bars"} style={{ color: colors.primary, fontSize: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Entypo
            name={"dots-three-horizontal"}
            style={{
              color: colors.primary,
              fontSize: 22,
              marginHorizontal: 22,
            }}
          />
        </TouchableOpacity>
        <PopUpModal
          isVisible={modalVisible}
          styles={{
            backgroundColor: colors.boardBackground,
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
        <UiHeaderButton name="Board" isSelected={true} />
        <UiHeaderButton name="Roadmap" isSelected={false} />
        <UiHeaderButton name="Settings" isSelected={false} />
      </View>
      {/* item3 */}
      <View
        style={{
          backgroundColor: "#8aafed",
          height: 0.5,
          opacity: 0.6,
          width: "100%",
        }}
      />
      {/* item4 */}

      <FlatList
        ref={scrollRef1}
        initialNumToRender={4}
        onContentSizeChange={() => {}}
        style={{ maxHeight: 500, flexGrow: 0 }}
        horizontal
        scrollEnabled
        data={boards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View
        style={{
          width: 300,
          flex: 1,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {selectedBoard.map((board, index) => (
          <View
            key={index}
            style={{
              width: 7,
              height: 7,
              backgroundColor: board ? "#fff" : "#fff5",
              borderRadius: 50,
              alignSelf: "center",
              marginHorizontal: 5,
            }}
          />
        ))}
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
