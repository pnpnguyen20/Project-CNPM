import { React, useCallback, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";

import { Board, tempData } from "../components";

import { PopUpModal, ProjectModal } from "../components/PopUpModal";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";


export default function ProjectDetail({ route, navigation }) {
  const [PJ_NAME, setPJ_NAME] = useState(route.params.PJ_NAME);
  const [selectedBoard, setSelectedBoard] = useState([true, false, false]);

  const scrollRef1 = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);


  const [LABELS, setLABELS] = useState(route.params.LABELS);
  const handleAddBoard = (title) => {
    setLABELS([
      ...LABELS,
      {
        id: new Date().getTime() % 1e6,
        PJ_NAME: "",
        title: title ? title.toUpperCase() : "NEW COLUMN",
        tasks: [{ id: new Date().getTime() % 1e6, text: "this is a task" }],
      },
    ]);

    setTimeout(() => {
      scrollRef1.current.scrollToEnd({ animated: true });
    }, 150);
  };

  const handleRenameBoard = (id, newName) => {
    const temp = [...LABELS];
    temp.forEach((b) => {
      if (b.id == id)
        b.title = newName
    });

    setLABELS(temp)
  };

  const handleDeleteBoard = (id) => {
    const filteredData = LABELS.filter((item) => item.id !== id);
    setLABELS(filteredData);
  };

  const renderItem = ({ item, index }) => (
    <View>
      <Board
        id={item.id}
        PJ_NAME={PJ_NAME}
        title={item.title}
        handleDeleteBoard={handleDeleteBoard}
        handleRenameBoard={handleRenameBoard}
        tasks={route.params.LABELS[index] ? route.params.LABELS[index].tasks : []}
      />
    </View>
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
          onPress={() => {
            setProjectVisible(!projectVisible)
          }}
        >
          <Text style={{ color: colors.textColor, fontSize: 22, fontWeight: 'bold' }}>
            {PJ_NAME}
          </Text>
          <Icon
            name={"caret-down"}
            style={{
              marginLeft: 5,
              color: colors.textColor,
              fontSize: 18,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>


        <ProjectModal
          isVisible={projectVisible}
          styles={{
            backgroundColor: colors.mainBackground,
            width: 350,
            borderRadius: 10,
            alignSelf: "center",
            top: '16%',

            flexDirection: "column",
            shadowOpacity: 1,
            shadowRadius: 300,
          }}

          close={() => {
            setProjectVisible(false);
          }}
        />




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
            backgroundColor: colors.mainBackground,
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
        style={{ flexGrow: 0, marginLeft: 20 }}
        horizontal
        scrollEnabled
        data={LABELS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  );
}
