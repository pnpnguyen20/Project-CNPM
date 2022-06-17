import { React, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";

import { UiHeaderButton, Board } from "../components";

export default function Projects(props) {
  const [projectName, setProjectName] = useState("new-project");
  const [selectedBoard, setSelectedBoard] = useState([true, false, false]);
  return (
    <SafeAreaView
      style={{ backgroundColor: "black", flex: 1, alignItems: "center" }}
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
              color: "#528ae6",
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
          <Text style={{ color: "#528ae6", fontSize: 20 }}>{projectName}</Text>
          <Icon
            name={"caret-down"}
            style={{
              marginLeft: 5,
              color: "#528ae6",
              fontSize: 16,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={"bars"} style={{ color: "#528ae6", fontSize: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("bam con cac")}>
          <Entypo
            name={"dots-three-horizontal"}
            style={{
              color: "#528ae6",
              fontSize: 22,
              marginHorizontal: 22,
            }}
          />
        </TouchableOpacity>
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
      <View style={{ backgroundColor: "#528ae6", height: 1, opacity: 0.36 }} />
      {/* item4 */}

      <ScrollView horizontal style={{}}>
        <Board projectName={projectName} />
        <Board projectName={projectName} />
        <Board projectName={projectName} />
      </ScrollView>

      {/* <Button
        title="Go to Home"
        onPress={() => props.navigation?.navigate("Home")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}

      <View style={{ flex: 1 }} />
      <View style={{}}>
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
      </View>
      {/* a line */}
      <View
        style={{
          backgroundColor: "#528ae6",
          opacity: 0.18,
          height: 1,
          marginVertical: 10,
        }}
      />
    </SafeAreaView>
  );
}
