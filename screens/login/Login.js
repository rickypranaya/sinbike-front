import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MainButton from '../../components/MainButton';
import SecondaryButton from '../../components/SecondaryButton';
import { NavigationActions, StackActions } from 'react-navigation';

const Login = props=>{
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
                style={styles.logo_image} 
                source={require("../../assets/images/sinbike_logo.png")}
                resizeMode='contain'
            /> 
            <Image 
                style={styles.illustration_image} 
                source={require("../../assets/images/illustration_home.jpg")}
                resizeMode='contain'
            /> 
            <MainButton title="Register"  onPress={()=>{props.navigation.navigate('create')}}/>
            <SecondaryButton title="Log in" onPress={()=>{resetStack('home')}}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo_image:{
        height:'15%'
    },
    illustration_image:{
        height:'15%',
        marginVertical:50,
    },
});

export default Login;