import React from 'react';
import Constant from './Constants.js';
import { View } from 'react-native';



const BikePoint = props =>{
    return (
        <View style={{width:20, height:20, backgroundColor:'white', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:15, height:15, backgroundColor:Constant.PRIMARY_COLOR, borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                    <View style={{width:6, height:6, backgroundColor:'white', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                    </View>
                </View>
            </View>
    );
}

export default BikePoint;