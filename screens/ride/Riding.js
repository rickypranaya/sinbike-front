import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import Constant from '../../components/Constants';
import MapView, { Marker } from 'react-native-maps';
import MainButton from '../../components/MainButton';
import {Icon} from 'react-native-elements';
import BikePoint from '../../components/BikePoint';
import { NavigationActions, StackActions } from 'react-navigation';

const Riding = props=>{
    const [lat, setLat] = useState(1.3031408081465787);
    const [long, setLong] = useState(103.83118629455568);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);

    const modalTap=()=>{
        show == false? setShow(true): setShow(false)
    }

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
            <MapView 
                style={styles.map} 
                initialRegion={{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}>
                    <Marker
                        coordinate={{ latitude : lat-0.0007 , longitude : long}}
                        image={require("../../assets/images/bikePoint.png")}
                        onPress={()=>{props.navigation.navigate('reserve')}}
                    />
                
            </MapView>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{}} style={styles.homeButton}>
                    <Icon
                        // reverse
                        name='menu'
                        type='material'
                        color= 'black'
                        size={25}
                    /> 
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{props.navigation.navigate('endTrip')}} style={styles.homeButton}>
                    <Icon
                        // reverse
                        name='flag-checkered'
                        type='material-community'
                        color= 'black'
                        size={25}
                    /> 
                </TouchableOpacity>
            </View>
            

            <Icon
                style={styles.marker}
                // reverse
                name='location-pin'
                type='material'
                color='black'
                size={40}
            /> 

            <View  behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0} style={styles.bottomModal}>

                <TouchableOpacity onPress={()=>{modalTap()}}>
                    <Icon
                        // reverse
                        name={show==false?'keyboard-arrow-up':'keyboard-arrow-down'}
                        type='material'
                        color= 'black'
                        size={25}
                    />
                </TouchableOpacity>  

                <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:5}}>
                    <Text style={{fontWeight:'600'}}> Bike ID : 1231097293 </Text>
                    <Text style={{fontWeight:'600'}}> Start : 12:04 PM </Text>
                </View> 

                <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
                    <BikePoint/>
                    <Text style={{color:Constant.PRIMARY_COLOR}}> Sri Srinivasa Perumal, Singapore </Text>

                </View>     

                {show == true?

                <View style={styles.searchField}> 
                    <Icon
                        // reverse
                        name='search'
                        type='material'
                        color= {Constant.GREY_COLOR}
                        size={22}
                    /> 
                    <TextInput
                        // onSubmitEditing ={()=>{}}
                        clearButtonMode='while-editing'
                        placeholder= 'search location'
                        placeholderTextColor="#999999"
                        returnKeyType="search"
                        autoCapitalize="none"
                        style={{flex:1, marginLeft:10}}
                        //maxLength={11}
                        onChangeText={(val) => {
                            setSearch(val);
                        }}
                        onSubmitEditing={()=>{
                            //Alert.alert('you searched "'+search+'"\n this is development mode' )
                        }}
                    /> 
                    
                </View> 
                : null} 
             </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    map: {
        position:'absolute',
        top:0,
        width: Constant.DEVICE_WIDTH,
        height: Constant.DEVICE_HEIGHT,
      },
    marker :{
        shadowOpacity:0.5, 
        shadowRadius:2, 
        shadowOffset:{width:0, height:3}
    },
    homeButton:{
        backgroundColor:'white', 
        padding:5, 
        borderRadius:5,
        shadowOpacity:0.2, 
        shadowRadius:2, 
        shadowOffset:{width:0, height:3},
        marginTop:10
    },
    header: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        width:Constant.DEVICE_WIDTH*0.85, 
       // backgroundColor:'blue',
        position:'absolute',
        top:Constant.DEVICE_WIDTH*0.1
    },
    bottomModal: {
        backgroundColor:'white',
        position:'absolute', 
        bottom:0,
        width:Constant.DEVICE_WIDTH,
        paddingBottom:30,
        paddingTop:10,
        paddingHorizontal:25,
        borderRadius:25,
        shadowOpacity:0.1, 
        shadowRadius:5, 
        shadowOffset:{width:0, height:-1}
    },
    searchField:{
        width:'100%',
        backgroundColor:'#efefef',
        padding:10,
        borderRadius:50,
        marginVertical:10,
        flexDirection:'row',
    }, 
});

export default Riding;