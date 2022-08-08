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
  Image,
  Keyboard,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from "../constants/colors";

const ModalInputBoardName = (props) => {
  const [title, setTitle] = useState("");

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <View style={props.styles}>
          <Text
            style={{
              color: colors.textColor,
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
              color: colors.textColor,
              marginVertical: 15,
              paddingLeft: 5,
              width: "85%",
              alignSelf: "center",
              backgroundColor: colors.mainBackground,
              borderColor: colors.primary3,
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
            style={{ backgroundColor: colors.textColor, opacity: .3, height: 1, width: "100%" }}
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
              <Text style={{ color: colors.primary1, fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: colors.textColor, opacity: .3, width: 1, height: "100%" }}
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
              <Text style={{ color: colors.textColor }}>Rename</Text>
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
              color: colors.textColor,
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
              color: colors.textColor,
              marginVertical: 15,
              paddingLeft: 5,
              width: "85%",
              alignSelf: "center",
              backgroundColor: colors.primary3,
              borderColor: colors.primary3,
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
            style={{ backgroundColor: colors.textColor, height: .5, opacity: .3, width: "100%" }}
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
              <Text style={{ color: colors.primary1, fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: colors.textColor, width: 1, opacity: .3, height: "100%" }}
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
              <Text style={{ color: colors.textColor }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const PopUpModal = (props) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  return (
    <View>
      <InputModal
        styles={{
          backgroundColor: colors.mainBackground,
          width: 250,
          borderRadius: 10,
          alignSelf: "center",
          flexDirection: "column",
          top: 200,
          shadowOpacity: 0.5,
          shadowRadius: 75,
          shadowColor: colors.textColor,
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
              <View style={{
                flexDirection: "column",
                shadowOpacity: 0.5,
                shadowRadius: 75,
                shadowColor: colors.textColor,
              }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.textColor,
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
                    backgroundColor: colors.textColor,
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
                  <Text style={{ color: colors.textColor, fontSize: 15 }}>
                    Add new column
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    height: 0.5,
                    backgroundColor: colors.textColor,
                    opacity: 0.5,
                  }}
                />
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 15,
                  }}
                  onPress={() => {
                    setProjectVisible(true);
                    props.close();
                  }}
                >
                  <Text style={{ color: colors.textColor, fontSize: 15 }}>
                    Project Detail
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    height: 0.5,
                    backgroundColor: colors.textColor,
                    opacity: 0.5,
                  }}
                />
                <TouchableOpacity
                  style={{ paddingVertical: 10, paddingLeft: 15 }}
                >
                  <Text style={{ color: colors.warning, fontSize: 15, fontWeight: "bold", }}>Leave Project</Text>
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
              <View style={{
                flexDirection: "column",
                shadowOpacity: 0.5,
                shadowRadius: 75,
                shadowColor: colors.textColor
              }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.textColor,
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
                    backgroundColor: colors.textColor,
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
                  <Text style={{ color: colors.textColor, fontSize: 15 }}>
                    Edit task
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    height: 0.5,
                    backgroundColor: colors.textColor,
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
                  <Text style={{ color: colors.textColor, fontSize: 15 }}>
                    Assign member
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    height: 0.5,
                    backgroundColor: colors.textColor,
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
                  <Text style={{ color: colors.textColor, fontSize: 15 }}>Delete task</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const ProjectInputModal = (props) => {
  const [title, setTitle] = useState("");

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <View style={props.styles}>
          <Text
            style={{
              color: colors.textColor,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 14,
              fontSize: 16,
            }}
          >
            Add new project
          </Text>
          <TextInput
            autoFocus
            placeholder="Project name"
            value={title}
            style={{
              alignItems: "center",
              height: 30,
              color: colors.textColor,
              marginVertical: 15,
              paddingLeft: 5,
              width: "85%",
              alignSelf: "center",
              backgroundColor: colors.mainBackground,
              borderColor: colors.primary3,
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
            style={{ backgroundColor: colors.textColor, opacity: .3, height: 1, width: "100%" }}
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
              <Text style={{ color: colors.primary1, fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <View
              style={{ backgroundColor: colors.textColor, opacity: .3, width: 1, height: "100%" }}
            ></View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              onPress={() => {
                // props.addBoard(title);
                setTitle("");
                props.close();
              }}
            >
              <Text style={{ color: colors.textColor }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ProjectModal = (props) => {
  const [title, setTitle] = useState("");

  return (
    <View >
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => props.close()}
        >
          <Pressable style={props.styles}>
            <View style={{ padding: 25, paddingVertical: 30 }}>
              <View style={{ flexDirection: "row" }}>
                <Entypo
                  name={"folder"}
                  style={{
                    color: colors.textColor,
                    fontSize: 25,
                    marginRight: 15,
                    alignSelf: 'center'
                  }}
                />
                <Text
                  style={{
                    color: colors.textColor,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Project X
                </Text>
                <Entypo
                  name={"edit"}
                  style={{
                    color: colors.textColor,
                    fontSize: 23,
                    position: "absolute",
                    right: 15,
                    alignSelf: "center",
                  }}
                />
              </View>
              <Text style={{
                color: colors.textColor,
                fontSize: 19,
                marginTop: 20,
              }}>Description</Text>
              <TextInput
                placeholder="Add a detail description..."
                value={title}
                style={{
                  height: 75,
                  color: colors.textColor,
                  backgroundColor: colors.primary3,
                  paddingLeft: 5,
                  width: "100%",
                  borderColor: colors.primary3,
                  borderWidth: 1,
                  borderRadius: 7,
                  marginTop: 5,
                  marginBottom: 15,
                  paddingLeft: 8,
                  paddingTop: 6,
                  fontSize: 16,
                }}
                multiline={true}
                onChangeText={(text) => {
                  const temp = text.replace(/^\s*\n/gm, "")
                  setTitle(temp);
                }}
                onSubmitEditing={() => {
                  // props.addBoard(title);
                  Keyboard.dismiss()
                }}
              />
              <Text style={{
                color: colors.textColor,
                fontSize: 19,
                marginBottom: 7,
              }}>
                Due Date
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Entypo
                  name={"calendar"}
                  style={{
                    color: colors.textColor,
                    fontSize: 19,
                    alignSelf: "center",
                    marginRight: 5
                  }}
                />

                <Text style={{
                  color: colors.textColor,
                  fontSize: 15,
                }}>
                  10/10/2023
                </Text>
              </View>
              <Text style={{
                color: colors.textColor,
                fontSize: 19,
                marginBottom: 8,
                marginTop: 15,
              }}>
                Team Leader
              </Text>
              <Image source={require("../assets/anya.png")} style={{ borderRadius: 50, width: 40, height: 40 }} />

              <Text style={{
                color: colors.textColor,
                fontSize: 19,
                marginTop: 15,
                marginBottom: 8,
              }}>
                Team Members
              </Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Image source={require("../assets/prj_icon.png")} style={{ borderRadius: 50, width: 40, height: 40, marginRight: 7 }} />
                <Image source={require("../assets/prj_icon.png")} style={{ borderRadius: 50, width: 40, height: 40, marginRight: 7 }} />
                <TouchableOpacity>
                  <Ionicons
                    name="ios-ellipsis-horizontal-circle-sharp"
                    style={{ borderRadius: 50, fontSize: 50, color: colors.primary1 }} />
                </TouchableOpacity>
              </View>


            </View>


            <View
              style={{ backgroundColor: colors.textColor, height: .5, opacity: .3, width: "100%" }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ paddingVertical: 10 }}
                onPress={() => {
                  // props.handleDeleteTask(props.id);
                  props.close();
                }}
              >
                <Text style={{
                  color: colors.warning,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginVertical: 5,
                }}>
                  Delete project
                </Text>
              </TouchableOpacity>

            </View>

          </Pressable>
        </Pressable>



      </Modal>
    </View>
  );
};


const MemberModal = (props) => {

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => props.close()}
        >
          <Pressable style={props.styles}>
            <View style={{ padding: 25, paddingVertical: 30 }}>
              <View style={{ flexDirection: "row", paddingBottom: 15}}>
                
                <TouchableOpacity>
                  <Ionicons
                    name={"arrow-back"}
                    style={{
                      color: colors.primary1,
                      fontSize: 25,
                      marginRight: 15,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Text
                  style={{
                    color: colors.textColor,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >Member</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{position: "absolute", right: 15,}}>
                <Ionicons
                  name={"add-circle-outline"}
                  style={{
                    color: colors.primary1,
                    fontSize: 23,
                    //marginLeft: 60,
                    
                  }}
                />
                </TouchableOpacity>


              </View>
              <ScrollView>
              {props.Members.map((item, index) =>
              <TouchableOpacity
                key={index}
                style={{
                flexDirection: 'row',

                alignItems: 'center',
                borderRadius: 15,
                paddingBottom: 10,
              }}>
              <Image source={require("../assets/prj_icon.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 50,
              }} />

                <Text style={{
                  fontSize: 17,
                  color: colors.textColor,
                  alignContent: 'center',
                  margin: 5,
                  fontWeight: "700"
                }}>
                  {item.MEM_ID}
                </Text>


                <TouchableOpacity style={{position: "absolute", right: 45,}}>
                <Ionicons
                  name={item.lead ? "flag" : "flag-outline"}
                  style={{
                    color: colors.primary1,
                    fontSize: 25,
                    marginRight: 10,
                    alignSelf: 'center',
                    marginLeft: 20
                  }}/>
                </TouchableOpacity>

                <TouchableOpacity style={{position: "absolute", right: 15,}}>
                  <Entypo
                    name="dots-three-horizontal"
                    style={{fontSize: 20, color: colors.textColor, marginLeft: 5 }} />
                </TouchableOpacity>
              

          </TouchableOpacity>
          )}
                
              </ScrollView>
            </View>

          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};


const AddMemberModal = (props) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState("");
  
  const tempMember = [
    {
      src: require("../assets/prj_icon.png"),
      name: "Quang",
      added: true,
    },
    {
      src: require("../assets/prj_icon.png"),
      name: "Toàn",
      added: false,
    }
  ]

  const searchMember = (e) => {
    let text = e.toLowerCase()
    let filteredName = tempMember.filter((item) => {
        return item.name.toLowerCase().includes(text)
    })
    setFilteredData(filteredName);
  }

  return (
    <View >
      <Modal animationType="none" transparent={true} visible={props.isVisible}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => props.close()}
        >
          <Pressable style={props.styles}>
            <View style={{ padding: 25, paddingVertical: 30 }}>
            <View style={{ flexDirection: "row", paddingBottom: 10}}>
                
                <TouchableOpacity>
                  <Ionicons
                    name={"arrow-back"}
                    style={{
                      color: colors.primary1,
                      fontSize: 25,
                      marginRight: 15,
                      alignSelf: 'center'
                    }}
                  />
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Text
                  style={{
                    color: colors.textColor,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >Add member</Text>
                </TouchableOpacity>

              </View>

              <View style={{
                flexDirection: 'row',
                backgroundColor: colors.primary3,
                opacity: .75,
                borderRadius: 10,
            }}>
                <Entypo
                    name={"magnifying-glass"}
                    style={{
                        color: colors.textColor,
                        fontSize: 22,
                        alignSelf: 'center',
                        margin: 5,
                        marginHorizontal: 10,
                    }}
                />
                <TextInput
                    style={{
                        flex: 1,
                        height: 30,
                        alignSelf: 'center',
                        color: colors.textColor,
                        fontSize: 17,
                    }}
                    placeholder={"Search members"}
                    placeholderTextColor={colors.textColor}
                    value={text}
                    onChangeText={(text) => { searchMember(text), setText(text) }}
                />
            </View>
            <ScrollView style = {{paddingTop: 15}}>
            {tempMember.map((item, index) =>
              <TouchableOpacity
                key={index}
                style={{
                flexDirection: 'row',

                alignItems: 'center',
                borderRadius: 15,
                paddingBottom: 15,
              }}>
            <Image source={item.src}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
                borderRadius: 50,
            }} />

              <Text style={{
                fontSize: 17,
                color: colors.textColor,
                alignContent: 'center',
                margin: 5,
                fontWeight: "700"
              }}>
                {item.name}
              </Text>

                <TouchableOpacity 
                //onPress={() => {item.added(!item.added)}}
                style={{position: "absolute", right: 0}}
                >
                  <Ionicons
                  name={item.added ? "checkmark-circle": "add-circle-outline"}
                  style={{
                    fontSize: 30, color: colors.primary1, marginLeft: 5
                  }}/>
                </TouchableOpacity>
          </TouchableOpacity>

          )}

            </ScrollView>
             

        <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate("ProfileInfo")}>
            <Text style={styles.panelButtonTitle}>Confirm</Text>
        </TouchableOpacity>
            </View>

          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export { PopUpModal, InputModal, ModalInputBoardName, TaskModal, ProjectInputModal, ProjectModal, MemberModal, AddMemberModal};

const styles = StyleSheet.create({
  commandButton: {
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: colors.primary1,
    alignItems: 'center',
    marginTop: 20,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
});