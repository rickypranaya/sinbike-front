import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constant from '../components/Constants';

const Splash = props=>{
    useEffect(()=>{
       setTimeout(()=>{ props.navigation.replace('login')}, 2000);
       //setTimeout(()=>{ alert('hello')}, 1000);

    },[]);

    return(
        <View style={styles.screen}>
                <Image 
                    style={styles.image} 
                    source={require("../assets/images/sinbike_logo.png")}
                    resizeMode='contain'
                    /> 
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height: Constant.DEVICE_HEIGHT *0.18,
    }
});

export default Splash;