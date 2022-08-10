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
  const [P_Members, setP_Members] = useState([]);
  const [A_Members, setA_Members] = useState([]);
  const [needRefresh, setNeedRefresh] = useState(false)

  //get
  useEffect(() => {
    const fetchproducts = async () => {

      const { data } = await axios.put('/project',
        {
          "PJ_ID": route.params.PROJECT_INFO.PJ_ID
          , "MEM_ID": route.params.MEM_ID
          , "MEM_POS": 0
        })
      const message = data.message
      if (message.success) {
        console.log(data.data)
        setProject(data.data.PROJECT_INFO)
        setLABELS(data.data.PROJECT_INFO.LABELS)
        setP_Members(data.data.PROJECT_INFO.PROJECT_MEMBERS)
        setA_Members(data.user)

      }
      else
        console.log(message)
    }
    fetchproducts();
  }, [needRefresh])

  //post new board

  const postBoard = (LB_ID, LB_NAME) => {

    axios.post('/label', {
      "access": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID
        , "MEM_ID": route.params.MEM_ID
        , "MEM_POS": 0
      },
      "data": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID,
        "LB_ID": LB_ID,
        "LB_NAME": LB_NAME
      }
    })

    setNeedRefresh(!needRefresh)
  }

  const postMem = (MEM_ID) => {

    axios.post('/member', {
      "access": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID
        , "MEM_ID": route.params.MEM_ID
        , "MEM_POS": 0
      },
      "data": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID,
        "MEM_ID": MEM_ID
      }
    })

    setNeedRefresh(!needRefresh)
  }

  const scrollRef1 = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [memnerVisible, setMemberVisible] = useState(false);

  const handleLeave = () => {

    axios.put('/delete/project', {
      "access": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID
        , "MEM_ID": route.params.MEM_ID
        , "MEM_POS": 0
      }
    })

    navigation.navigate("ProjectList", { refresh: 1 })
  }

  const handleAddBoard = (title) => {
    postBoard(LABELS.length, title)
    setTimeout(() => {
      scrollRef1.current.scrollToEnd({ animated: true });
    }, 150);
  };

  const handleRenameBoard = (id, newName) => {
    axios.patch('/label', {
      "access": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID
        , "MEM_ID": route.params.MEM_ID
        , "MEM_POS": 0
      },
      "data": {
        "PJ_ID": 99,
        "LB_ID": id,
        "LB_NAME": newName
      }
    })
    setNeedRefresh(!needRefresh)
  };

  const handleDeleteBoard = (id) => {
    axios.put('/delete/label', {
      "access": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID
        , "MEM_ID": route.params.MEM_ID
        , "MEM_POS": 0
      },
      "data": {
        "PJ_ID": 99,
        "LB_ID": id,
        "LB_NAME": "99"
      }
    })
    setNeedRefresh(!needRefresh)
  }

  const handleDeleteMem = (id) => {
    axios.put('/delete/member', {
      "access": {
        "PJ_ID": route.params.PROJECT_INFO.PJ_ID
        , "MEM_ID": route.params.MEM_ID
        , "MEM_POS": 0
      },
      "data": {
        "PJ_ID": 99,
        "MEM_ID": id,
      }
    })
    setNeedRefresh(!needRefresh)
  }

  const renderItem = ({ item, index }) => (
    <View>
      <Board
        id={item.LB_ID}
        PJ_NAME={project.PJ_NAME}
        title={item.LB_NAME}
        P_Members={P_Members}
        A_Members={A_Members}
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
      {/* nut reload */}
      {/* <TouchableOpacity style={{ width: 200, height: 200, backgroundColor: 'blue' }} onPress={() => {

      }} /> */}
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
          onPress={() => { setProjectVisible(!projectVisible) }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: colors.textColor, fontSize: 22, fontWeight: 'bold'
            }}>
            {route.params.PROJECT_INFO.PJ_NAME}
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

        <TouchableOpacity
          onPress={() => { setModalVisible(!modalVisible) }}
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
          goBack={1}
          P_Members={P_Members}
          A_Members={A_Members}
          handleDeleteMem={handleDeleteMem}
          handleLeave={handleLeave}
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
