import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Button } from 'react-native';
import Constant from '../../components/Constants';
import MainButton from '../../components/MainButton';
import {Icon} from 'react-native-elements';
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import Stars from 'react-native-stars';
import Modal from 'react-native-modal';
import { NavigationActions, StackActions } from 'react-navigation';




const TripInfo = props=>{
    const [stars, setStars] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false)


    useEffect(()=>{
        setTimeout(()=>{ setModalVisible(true)}, 2000);
     },[]);

     const resetStack = (screen) => {
        props
          .navigation
          .dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: screen,
              }),
            ],
          }))
       }


    return(
        <View style={styles.screen}>
            <Image 
                    source={require("../../assets/images/TripEndedDemo.png")}
                    resizeMode='contain'
                /> 
            <TouchableOpacity activeOpacity={1} onPress={()=>{resetStack('home')}} style={styles.homeButton}>
                    <Icon
                        // reverse
                        name='home'
                        type='material'
                        color= 'black'
                        size={25}
                    /> 
            </TouchableOpacity>
            <Modal
             isVisible={isModalVisible}
             animationInTiming ={500}
             animationOutTiming ={500}
             onBackdropPress={()=>{setModalVisible(false)}}
             onBackButtonPress={()=>{setModalVisible(false)}}
             >
                <View  style={styles.modal}>
                    <Text style={{fontWeight:'bold'}}>Enjoy your ride?</Text>
                    <View style={{marginVertical:20}}>
                        <Stars
                        default={4}
                        count={5}
                        spacing={5}
                        half={false}
                        update={(val)=>{setStars(val); setModalVisible(false)}}
                        fullStar={ 
                                <Icon
                                    // reverse
                                    name='star'
                                    type='material'
                                    color= 'orange'
                                    size={30}
                                /> 
                                }
                        emptyStar={ <Icon
                            // reverse
                            name='star'
                            type='material'
                            color= 'lightgrey'
                            size={30}
                        /> }
                        />
                    </View>
                    {/* <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:15}}>
                        <Text style={{color:'grey'}}>   leave a comment</Text>
                        <Icon
                            // reverse
                            name='keyboard-arrow-down'
                            type='material'
                            color= 'grey'
                            size={20}
                        />
                    </TouchableOpacity> */}  
                    
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    homeButton:{
        position:'absolute',
        backgroundColor:'white', 
        padding:5, 
        left:20,
        top:35,
        // borderRadius:5,
        // shadowOpacity:0.2, 
        // shadowRadius:2, 
        // shadowOffset:{width:0, height:3},
        marginTop:10
    },
    modal:{
        alignSelf:'center',
        position:'absolute',
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal:25,
        borderRadius:15,
        alignItems:'center',
        shadowOpacity:0.2, 
        shadowRadius:5, 
        shadowOffset:{width:0, height:4},
        flex:1
    },
});

export default TripInfo;