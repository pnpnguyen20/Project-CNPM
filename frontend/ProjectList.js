import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, Platform, StatusBar} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "react-native/Libraries/NewAppScreen";
const ProjectList = () => {
    const [page, setPage] = useState('All');
  return (
    <SafeAreaView style={{ backgroundColor: colors.mainBackground, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle = {{paddingTop: 10, paddingBottom:30}}>
            <View style = {{flex: 1}}>
                <StatusBar barStyle= 'light-content'/>
                <View style = {{width: '100%', height: '25%'}}>
                    <View style = {{width: '100%', flex: 1, backgroundColor : '#005b96', justifyContent : 'center', alignItems: 'center'}} >
                        <Text styles = {{fontSize: 50, fontWeight: 'bold', colors: 'white'}}> Project List</Text>
                    </View>
                    <View style = {{marginTop: 40}}/>
                    {/* <View style = {styles.inputContainer}>
                        <Icon name = 'search' size = {28}/>
                        <TextInput/>
                    </View> */}
                  
                    <View style = {{height: 50, flexDirection : 'row'}}>
                        <TouchableOpacity style ={styles.ItemMenu} onPress = {() => {setPage('All')}} disabled = {page === 'All'? true : false}>
                            <Text style = {{fontSize: 10, color: '#FFFFFF'}}>All</Text>
                            {page === 'All'? <View style = {styles.viewPage}></View>: null}

                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.ItemMenu} onPress = {() => {setPage('On Progress')}} disabled = {page === 'On Progress'? true : false}>
                            <Text style = {{fontSize: 10, color: '#FFFFFF'}}>On Progess</Text>
                            {page === 'On Progress'? <View style = {styles.viewPage}></View>: null}
                        </TouchableOpacity>
                         <TouchableOpacity style ={styles.ItemMenu} onPress = {() => {setPage('Done')}} disabled = {page === 'Done'? true : false}>
                            <Text style = {{fontSize: 10, color: '#FFFFFF'}}>Done</Text>
                            {page === 'Done'? <View style = {styles.viewPage}></View>: null}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

       </ScrollView>
    </SafeAreaView>
    
  );
};

export default ProjectList;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        height:30,
        borderRadius: 10,
        flexDirection:'row',
        backgroundColor: Colors.light,
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    ItemMenu:{ width: '33%',
     height: '100%', 
     justifyContent : 'center',
      alignItems: 'center'
    },
    viewPage:{position: 'absolute',
     bottom: 0, 
     height:5, 
     width: '100%',
     backgroundColor: '#005b96'
    },
})
