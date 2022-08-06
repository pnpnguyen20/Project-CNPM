import { React, useCallback, useEffect, useRef, useState } from "react";
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
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Board, tempData } from "../components";

import { PopUpModal, ProjectModal, MemberModal, AddMemberModal } from "../components/PopUpModal";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import axios from "../components/axios";


export default function ProjectDetail({ route, navigation }) {

  const [project, setProject] = useState([])
  const [PJ_NAME, setPJ_NAME] = useState(project.PJ_NAME);
  const [LABELS, setLABELS] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/project',
        {
          params: {
            "PJ_ID": 1
            , "MEM_ID": 1
            , "MEM_POS": 0
          }
        })
      const temp = data.data.PROJECT_INFO

      setProject(temp)
    }
    fetchproducts();

  }, [])

  const scrollRef1 = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [memnerVisible, setMemberVisible] = useState(false);



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
        id={item.LB_ID}
        PJ_NAME={project.PJ_NAME}
        title={item.LB_NAME}
        handleDeleteBoard={handleDeleteBoard}
        handleRenameBoard={handleRenameBoard}
        tasks={project.LABELS[index] ? project.LABELS[index].TASK_INFO : []}
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
      <TouchableOpacity style={{ width: 200, height: 200, backgroundColor: 'blue' }} onPress={() => {
        console.log(project.LABELS[0])
        setLABELS(project.LABELS[0])
        console.log(LABELS)
      }} />
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
          <Ionicons
            name={"arrow-back"}
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
            {project.PJ_NAME}
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


        <AddMemberModal
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
        keyExtractor={(item) => item.LB_ID}
      />

    </SafeAreaView>
  );
}
