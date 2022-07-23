import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { React, useState } from "react";
import colors from "../constants/colors";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { tempData } from "../components";

const ProjectList = () => {
    const [text, setText] = useState('');
    return (
        <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <View style={{ backgroundColor: 'coral', borderRadius: 50, width: 35, height: 35 }} />
                <TouchableOpacity style={{ right: 5, position: "absolute" }}>
                    <Entypo
                        name={"plus"}
                        style={{
                            color: colors.primary1,
                            fontSize: 40,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ color: colors.textColor, fontSize: 30, fontWeight: 'bold', marginBottom: 12 }}>
                    Projects
                </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                backgroundColor: 'rgba(255,255,255,.2)',
                opacity: .5,
                height: 40,
                borderRadius: 10,
            }}>
                <Entypo
                    name={"magnifying-glass"}
                    style={{
                        color: colors.textColor,
                        fontSize: 22,
                        alignSelf: 'center',
                        margin: 5,
                    }}
                />
                <TextInput
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 30,
                        alignSelf: 'center',
                        color: "green",
                    }}
                    placeholder={"Search projects"}
                    placeholderTextColor={colors.textColor}
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                    onBlur={() => Keyboard.dismiss()}
                />
            </View>


            <Text style={{ fontSize: 20, color: colors.textColor, marginTop: 15 }}>All projects</Text>

            {/* <FlatList
        ref={scrollRef}
        scrollEnabled
        data={taskItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
            {tempData.map((item) =>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ProjectList")}
                    style={{
                        height: 75,
                        width: "100%",
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <View style={{
                        backgroundColor: 'white',
                        width: 35,
                        height: 35,
                        marginRight: 10,
                        // alignSelf: 'center',
                    }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, color: colors.textColor, alignContent: 'center', }}>{item.projectName}</Text>
                        <Text style={{ fontSize: 13, color: colors.textColor, alignContent: 'center', }}>Due date: 10/10/2000</Text>
                    </View>
                    <View style={{ width: "100%", height: .1, opacity: .25, backgroundColor: colors.textColor, position: "absolute", bottom: 0, }} />
                </TouchableOpacity>)}

        </SafeAreaView>

    );
};


export default ProjectList;