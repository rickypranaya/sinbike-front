import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
import {Icon} from 'react-native-elements';
import Constant from './Constants';

const Header = props =>{
    return (
        <View>
            <View style={{backgroundColor:'white', width:Constant.DEVICE_WIDTH, height:44}}>
            </View>

            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button}>
                    <Icon
                    // reverse
                    name='arrow-back'
                    type='material'
                    color='black'
                    size={30}
                    />
                </TouchableOpacity>

                <Text style={{fontSize:18, fontWeight:'600'}}>
                    {props.title}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'white', 
        width:Constant.DEVICE_WIDTH, 
        height:50, 
        alignItems:'center',
        justifyContent:'center', 
        flexDirection:'row'
    },
    button:{
        position:'absolute', 
        left:20
    }
});

export default Header;