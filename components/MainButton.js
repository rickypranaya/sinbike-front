import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Constant from './Constants.js';
import {Icon} from 'react-native-elements';


const MainButton = props =>{
    return (
        <TouchableOpacity style={styles.main_button} onPress={() => { props.onPress() }}>
            { props.scan ? 
            <Icon
                style={{ marginRight :10}}
                // reverse
                name='crop-free'
                type='material'
                color='white'
                size={22}
                /> : null }
            <Text style = {styles.button_text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main_button:{
        flexDirection:'row',
        marginVertical:10,
        backgroundColor:Constant.PRIMARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
        width: Constant.DEVICE_WIDTH *0.7,
        paddingVertical:13,
        borderRadius:50,
    },
    button_text:{
        color:'white',
        fontWeight:'bold',
    },
});

export default MainButton;