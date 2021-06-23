import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Constant from '../../components/Constants';
import MainButton from '../../components/MainButton';
import Header from '../../components/Header';
import { NavigationActions, StackActions } from 'react-navigation';



const CheckBike = props=>{
    const [check, setCheck] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{ setCheck(false)}, 1000);
        //setTimeout(()=>{ alert('hello')}, 1000);
        
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
            <Header title='Scan Code and Ride' onBack={()=>{props.navigation.goBack()}}/>
            <Text style={{color: Constant.PRIMARY_COLOR, marginTop:50}}>{check==false? 'Bike is ready to use': 'Checking Bike Status...'}</Text>
            <View style={{marginVertical:50}}>
                <Image 
                    source={require("../../assets/images/bike.png")}
                    resizeMode='contain'
                /> 
                <Image 
                    style={{position:'absolute', bottom:35, right:105}} 
                    source={require("../../assets/images/gearLine.png")}
                    resizeMode='contain'
                /> 
                <Image 
                    style={{position:'absolute', top:25, left:90}} 
                    source={require("../../assets/images/seatLine.png")}
                    resizeMode='contain'
                /> 
                <Image 
                    style={{position:'absolute', top:90, right:15}} 
                    source={require("../../assets/images/tireLine.png")}
                    resizeMode='contain'
                /> 

                <Text style={styles.seatLine}>{check==false? 'Good': '..........'}</Text>
                <Text style={styles.gearLine}>{check==false? 'Good': '..........'}</Text>
                <Text style={styles.tireLine}>{check==false? 'Good': '..........'}</Text>
            </View>
            
            <Text style={{fontWeight:'bold'}}> Bike ID : 1231097293 </Text>
            <View style={{position:'absolute', bottom:Constant.DEVICE_HEIGHT*0.1}}>
                <MainButton title='Ride now' onPress={()=>{resetStack('riding')}}/>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('reportFaulty')}}>
                   <Text style={{color:Constant.PRIMARY_COLOR, fontSize:12, textAlign:'center'}}>Report faulty bike</Text>
                </TouchableOpacity>
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
    tireLine:{
        position:'absolute', 
        right:0, 
        top:70, 
        color:'#3BB502'
    },
    seatLine:{
        position:'absolute', 
        left:73,
        top:5, 
        color:'#3BB502'
    },
    gearLine:{
        position:'absolute', 
        bottom:15, 
        right: 85,
        color:'#3BB502'
    }
});

export default CheckBike;