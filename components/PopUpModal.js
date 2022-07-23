import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../constants/colors";

const ModalInputBoardName = (props) => {
  const [title, setTitle] = useState("");
  return (
    <View>
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <View style={props.styles}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 14,
              fontSize: 16,
            }}
          >
            Rename column
          </Text>
          <TextInput
            autoFocus
            placeholder="Column name"
            value={title}
            style={{
              alignItems: "center",
              height: 30,
              color: "#fff9",
              marginVertical: 15,
              paddingLeft: 5,
              width: "85%",
              alignSelf: "center",
              backgroundColor: colors.mainBackground,
              borderColor: "#fff5",
              borderWidth: 1,
              borderRadius: 7,
            }}
            onChangeText={(text) => {
              setTitle(text);
            }}
            onSubmitEditing={() => {
              props.handleRenameBoard(props.id, title);
              props.close();
            }}
          />
          <View
            style={{ backgroundColor: "#fff5", height: 1, width: "100%" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 24,
              }}
              onPress={() => {
                setTitle("");
                props.close();
              }}
            >
              <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#fff5", width: 1, height: "100%" }}
            ></View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              onPress={() => {
                props.handleRenameBoard(props.id, title);
                props.close();
              }}
            >
              <Text style={{ color: "#fff6" }}>Rename</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const InputModal = (props) => {
  const [title, setTitle] = useState("");

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <View style={props.styles}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 14,
              fontSize: 16,
            }}
          >
            Add new column
          </Text>
          <TextInput
            autoFocus
            placeholder="Column name"
            value={title}
            style={{
              alignItems: "center",
              height: 30,
              color: "#fff9",
              marginVertical: 15,
              paddingLeft: 5,
              width: "85%",
              alignSelf: "center",
              backgroundColor: colors.mainBackground,
              borderColor: "#fff5",
              borderWidth: 1,
              borderRadius: 7,
            }}
            onChangeText={(text) => {
              setTitle(text);
            }}
            onSubmitEditing={() => {
              props.addBoard(title);
              setTitle("");
              props.close();
            }}
          />
          <View
            style={{ backgroundColor: "#fff5", height: 1, width: "100%" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 24,
              }}
              onPress={() => {
                setTitle("");
                props.close();
              }}
            >
              <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: "#fff5", width: 1, height: "100%" }}
            ></View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              onPress={() => {
                props.addBoard(title);
                setTitle("");
                props.close();
              }}
            >
              <Text style={{ color: "#fff6" }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const PopUpModal = (props) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  return (
    <View>
      <InputModal
        styles={{
          backgroundColor: colors.primary3,
          width: 250,
          borderRadius: 10,
          alignSelf: "center",
          flexDirection: "column",
          top: 200,
          shadowOpacity: 1,
          shadowRadius: 300,
        }}
        isVisible={inputModalVisible}
        addBoard={props.addBoard}
        close={() => {
          setInputModalVisible(false);
        }}
      />
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            props.close();
          }}
        >
          <View>
            <View style={props.styles}>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "white",
                    opacity: 0.5,
                    textAlign: "center",
                    marginVertical: 10,
                  }}
                >
                  Board actions
                </Text>
                <View
                  style={{
                    height: 0.5,
                    backgroundColor: "white",
                    opacity: 0.5,
                  }}
                />

                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 15,
                  }}
                  onPress={() => {
                    setInputModalVisible(true);
                    props.close();
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Add new column
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
                  style={{ paddingVertical: 10, paddingLeft: 15 }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const TaskModal = (props) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  return (
    <View>
      <InputModal
        styles={{
          backgroundColor: colors.primary3,
          width: 250,
          borderRadius: 10,
          alignSelf: "center",
          flexDirection: "column",
          top: 200,
          shadowOpacity: 1,
          shadowRadius: 300,
        }}
        isVisible={inputModalVisible}
        addBoard={props.addBoard}
        close={() => {
          setInputModalVisible(false);
        }}
      />
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            props.close();
          }}
        >
          <View>
            <View style={props.styles}>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "white",
                    opacity: 0.5,
                    textAlign: "center",
                    marginVertical: 10,
                  }}
                >
                  Task actions
                </Text>
                <View
                  style={{
                    height: 0.5,
                    backgroundColor: "white",
                    opacity: 0.5,
                  }}
                />

                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 15,
                  }}
                  onPress={() => {
                    props.close();
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Edit task
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
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 15,
                  }}
                  onPress={() => {
                    props.close();
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Assign member
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
                  style={{ paddingVertical: 10, paddingLeft: 15 }}
                  onPress={() => {
                    props.handleDeleteTask(props.id);
                    props.close();
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Delete task</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export { PopUpModal, InputModal, ModalInputBoardName, TaskModal };
