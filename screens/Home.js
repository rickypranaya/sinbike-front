import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Constant from '../components/Constants';
import MapView, { Marker } from 'react-native-maps';
import MainButton from '../components/MainButton';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';


const Home = props=>{
    const [lat, setLat] = useState(1.3031408081465787);
    const [long, setLong] = useState(103.83118629455568);
    const [search, setSearch] = useState('');
    const [isModalVisible, setModalVisible] = useState(false)

    const drawerItems =(iconName, iconType, size, title, value)=>{
        return(
        <View style={{flexDirection:'row', alignItems:'center', height:50, paddingHorizontal:30, justifyContent:'space-between' }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon
                    // reverse
                    name={iconName}
                    type={iconType}
                    color= 'black'
                    size={size}
                /> 
                <Text style={{paddingLeft:10, fontWeight:'600'}}>{title}</Text>
            </View>
            <Text style={{paddingLeft:20}}>{value}</Text>
        </View>
        )
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
                        coordinate={{ latitude : lat+0.002 , longitude : long + 0.001}}
                        image={require("../assets/images/bikePoint.png")}
                        onPress={()=>{props.navigation.navigate('reserve')}}
                    />
                    <Marker
                        coordinate={{ latitude : lat - 0.0001 , longitude : long + 0.003}}
                        image={require("../assets/images/bikePoint.png")}
                        onPress={()=>{props.navigation.navigate('reserve')}}
                    />
                    <Marker
                        coordinate={{ latitude : lat + 0.0005 , longitude : long +0.002}}
                        image={require("../assets/images/bikePoint.png")}
                        onPress={()=>{props.navigation.navigate('reserve')}}
                    />
                
            </MapView>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{setModalVisible(true)}}style={styles.drawer}>
                    <Icon
                        // reverse
                        name='menu'
                        type='material'
                        color= 'black'
                        size={25}
                    /> 
                </TouchableOpacity>

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

            </View>
            

            <Icon
                style={styles.marker}
                // reverse
                name='location-pin'
                type='material'
                color='black'
                size={40}
            /> 

            <View style={{position:'absolute', bottom:Constant.DEVICE_HEIGHT*0.05}}>
                <TouchableOpacity onPress={()=>{}} style={styles.bikeButton}>
                        <Icon
                            // reverse
                            name='directions-bike'
                            type='material'
                            color= 'black'
                            size={25}
                        /> 
                    </TouchableOpacity>
                <MainButton scan='yes' title='Scan to Ride' onPress={()=>{props.navigation.navigate('scanBikeQR')}}/>
            </View>

            <Modal
             animationIn = 'slideInLeft'
             animationOut = 'slideOutLeft'
             isVisible={isModalVisible}
             animationInTiming ={500}
             animationOutTiming ={500}
             onBackdropPress={()=>{setModalVisible(false)}}
             onBackButtonPress={()=>{setModalVisible(false)}}
             style={{alignSelf:'flex-end', width:'100%'}}

             >
            <View style={{position:'absolute', left:0, width:300, height:Constant.DEVICE_HEIGHT, backgroundColor:'white', paddingVertical:90}}>
                <View style={{flexDirection:'row', alignItems:'center', marginBottom:44}}>
                    <Image 
                    style={{height:70}} 
                    source={require("../assets/images/profile.png")}
                    resizeMode='contain'
                    /> 
                    <View>
                        <Text style={{fontSize:13}}>Good Morning, </Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>John Doe</Text>
                    </View>
                </View>

                {drawerItems('user-circle', 'font-awesome', 25,'Profile', )}
                {drawerItems('wallet-outline', 'material-community',27,'E-Wallet', 'S$50.00')}
                {drawerItems('history', 'material', 28,'Trip History', )}
                {drawerItems('message1', 'ant-design', 23,'Messages', )}
                {drawerItems('customerservice', 'ant-design', 23,'Contact us', )}                
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
    map: {
        position:'absolute',
        top:0,
        width: Constant.DEVICE_WIDTH,
        height: Constant.DEVICE_HEIGHT,
      },
      searchField:{
        width:Constant.DEVICE_WIDTH *0.6,
        backgroundColor:'white',
        padding:10,
        borderRadius:50,
        marginVertical:10,
        shadowOpacity:0.2, 
        shadowRadius:2, 
        shadowOffset:{width:0, height:3},
        flexDirection:'row',
    }, 
    marker :{
        shadowOpacity:0.5, 
        shadowRadius:2, 
        shadowOffset:{width:0, height:3}
    },
    drawer:{
        backgroundColor:'white', 
        padding:5, 
        borderRadius:5,
        shadowOpacity:0.2, 
        shadowRadius:2, 
        shadowOffset:{width:0, height:3},
        marginRight:20
    },
    header: {
        flexDirection:'row', 
        alignItems:'center', 
        width:Constant.DEVICE_WIDTH*0.85, 
       // backgroundColor:'blue',
        position:'absolute',
        top:Constant.DEVICE_WIDTH*0.1
    },
    bikeButton:{
        backgroundColor:'white', 
        padding:5, 
        borderRadius:5,
        shadowOpacity:0.2, 
        shadowRadius:2, 
        shadowOffset:{width:0, height:3},
        marginTop:10,
        width:35,
    },
});

export default Home;