import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Constant from '../../components/Constants';
import MainButton from '../../components/MainButton';
import Header from '../../components/Header';
import { NavigationActions, StackActions } from 'react-navigation';
import {Icon} from 'react-native-elements';
import { CONTACTS } from 'expo-permissions';



const EndTrip = props=>{
    const [check, setCheck] = useState(true);
    useEffect(()=>{
        Alert.alert('Please lock the bike')
        
     });

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
            <Header title='End Trip' onBack={()=>{props.navigation.goBack()}}/>
            <View style={{height:Constant.DEVICE_HEIGHT*0.7, justifyContent:'center', alignItems:'center',paddingHorizontal:30}}>
                <Icon
                            // reverse
                            name='flag-checkered'
                            type='material-community'
                            color= 'black'
                            size={70}
                        /> 
                <View style={{marginVertical:20, }}>
                    <Image 
                        source={require("../../assets/images/bike.png")}
                        resizeMode='contain'
                    /> 
                
                </View>
                
                <Text style={{fontWeight:'bold', textAlign:'center'}}> Please Scan QR Code on the parking lot to end this trip </Text>
            </View>
            
            <View style={{position:'absolute', bottom:Constant.DEVICE_HEIGHT*0.1}}>
                <MainButton title='Scan QR' onPress={()=>{props.navigation.navigate('scanParking')}}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
       // justifyContent:'center',
    },
});

export default EndTrip;