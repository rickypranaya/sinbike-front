import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Constant from './Constants.js';

const SecondaryButton = props =>{
    return (
        <TouchableOpacity style={styles.secondary_button } onPress={() => { props.onPress() }}>
            <Text style = {styles.secondary_button_text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    secondary_button:{
        marginVertical:10,
        borderColor:Constant.PRIMARY_COLOR,
        borderWidth:2,
        alignItems:'center',
        width: Constant.DEVICE_WIDTH * 0.7,
        paddingVertical:13,
        borderRadius:50,
    },
    secondary_button_text:{
        color:'#FF6B37',
        fontWeight:'bold',
    }
});

export default SecondaryButton;