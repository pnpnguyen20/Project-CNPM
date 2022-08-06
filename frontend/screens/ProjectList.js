import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import { React, useEffect, useState } from "react";
import colors from "../constants/colors";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { tempData } from "../components";
import { ProjectInputModal } from "../components/PopUpModal";

import axios from "../components/axios";


const ProjectList = ({ navigation }) => {
    const [text, setText] = useState('');
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [projects, setProjects] = useState([])
    const [filteredData, setFilteredData] = useState([]);

    const searchProject = (e) => {
        let text = e.toLowerCase()
        let filteredName = projects.filter((item) => {
            return item.PJ_NAME.toLowerCase().includes(text)
        })
        setFilteredData(filteredName);
    }



    useEffect(() => {
        const fetchproducts =await ( async function () {
            
            const { data } = await axios.get('/login',
                {
                    params: {
                        "US_ACCOUNT": "goporo",
                        "US_PASSWORD": "123456",
                    }
                })
            const temp = data.data.USER_INFO.PROJECT_MEMBER
            console.log(temp[0].PROJECT_INFO)
            setProjects(temp)
            setFilteredData(temp)
        })()
        fetchproducts();
    }, [])

    const { PJ_ID, PJ_NAME, a1, a2, a3, a4, a5, LABELS } = projects
    return (
        <SafeAreaView style={{
            backgroundColor: colors.mainBackground,
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 25

        }}>

            <View style={{
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center',
                marginBottom: 35,
            }}>
                <Text style={{ color: colors.textColor, fontSize: 30, fontWeight: 'bold' }}>
                    Projects
                </Text>
                <TouchableOpacity style={{ right: 0, position: "absolute" }}>
                    <Image source={require("../assets/anya.png")} style={{ borderRadius: 50, width: 55, height: 55 }} />
                </TouchableOpacity>
            </View>



            <View style={{
                flexDirection: 'row',
                backgroundColor: colors.primary3,
                opacity: .75,
                height: 45,
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
                    placeholder={"Search projects"}
                    placeholderTextColor={colors.textColor}
                    value={text}
                    onChangeText={(text) => { searchProject(text), setText(text) }}
                />
            </View>

            <Text style={{ fontSize: 20, color: colors.textColor, marginTop: 15, fontWeight: 'bold', marginBottom: 10 }}>All projects</Text>


            {filteredData.map((item, index) =>
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("ProjectDetail", item)}
                    style={{
                        minHeight: 100,
                        // width: "100%",
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: colors.primary3,
                        borderRadius: 15,
                        marginBottom: 10,
                    }}>
                    <Image source={require("../assets/project.png")} style={{
                        width: 55,
                        height: 55,
                        marginRight: 20,
                        margin: 10,
                        borderRadius: 6,
                        shadowColor: '#000000',
                        shadowOffset: { width: 1, height: 3 },
                        shadowOpacity: 0.9,
                        shadowRadius: 3,
                        elevation: 5,
                    }} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontSize: 20,
                                color: colors.textColor,
                                alignContent: 'center',
                                margin: 4,
                            }}>{item.PROJECT_INFO.PJ_NAME}</Text>
                            <Text style={{
                                fontSize: 14, color: colors.textColor, alignContent: 'center', margin: 4,
                                opacity: .75,
                            }}>Due date: 10/10/2000</Text>
                        </View>
                    </View>


                    {/* <View style={{ width: "100%", height: .1, opacity: .25, backgroundColor: colors.textColor, position: "absolute", bottom: 0, }} /> */}

                </TouchableOpacity>)
            }

            <TouchableOpacity
                onPress={() => { setInputModalVisible(true) }}
                style={{ right: 25, bottom: 25, position: "absolute" }}>
                <View style={{
                    backgroundColor: colors.primary1,
                    borderRadius: 50,
                    width: 65,
                    height: 65,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Entypo
                        name={"plus"}
                        style={{
                            color: "white",
                            fontSize: 35,
                        }}
                    />
                </View>
            </TouchableOpacity>

            <ProjectInputModal
                styles={{
                    backgroundColor: colors.primary3,
                    width: 300,
                    borderRadius: 10,
                    alignSelf: "center",
                    flexDirection: "column",
                    top: 300,
                    shadowOpacity: 1,
                    shadowRadius: 300,
                }}
                isVisible={inputModalVisible}
                // addBoard={props.addBoard}
                close={() => {
                    setInputModalVisible(false);
                }}
            />
        </SafeAreaView >

    );
};


export default ProjectList;