import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = props=>{

    return(
        <View style={styles.screen}>
               <Text>profile page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});

export default Profile;