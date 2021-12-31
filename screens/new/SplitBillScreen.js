import React, { useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './components/BottomSheet';
import Header from './components/header';


const SplitBills = ({navigation}) => {

    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const { height } = Dimensions.get("window");
    
    return (
        <View style={styles.container}>
            <Header />
            <Text style={{color:"#000",textAlign:"center",fontSize:16,marginVertical:20}}>Split Bills</Text>
            <View style={{flex:1,elevation:10}}>
                <View style={{marginHorizontal:10,flex:1}}>
                    <View style={{height:160,width:"100%",borderRadius:10,backgroundColor:"gray"}} />
                    <View style={{marginHorizontal:10,marginTop:20}}>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <View style={{flexDirection:"row"}}>
                                    <MaterialIcons name='payment' color="#000" size={20} />
                                    <Text style={{color:"gray",marginLeft:10}}>Amount</Text>
                                </View>
                                <Text style={{color:"gray"}}>$4,995/-</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <View style={{flexDirection:"row"}}>
                                    <MaterialIcons name='payment' color="#000" size={20} />
                                    <Text style={{color:"gray",marginLeft:10}}>Tag</Text>
                                </View>
                                <SimpleLineIcons name='pencil' color="#000" size={16} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"#000"}}>Track</Text>
                                <MaterialIcons name='keyboard-arrow-down' color="#000" size={22} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"#000"}}>Track</Text>
                                <MaterialIcons name='keyboard-arrow-down' color="#000" size={22} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"#000"}}>Track</Text>
                                <MaterialIcons name='keyboard-arrow-down' color="#000" size={22} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"#000"}}>Track</Text>
                                <MaterialIcons name='keyboard-arrow-down' color="#000" size={22} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SplitBills;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000"
    },
    headerButton: {
        height:40,
        width:40,
        borderRadius:10,
        elevation:9,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    box: {
        height:150,width:150,
        borderRadius:5,
        backgroundColor:"gray",
        marginRight:10
    },
    float: {
        position: "absolute",
        top: -60,
        right:0
    }
})
