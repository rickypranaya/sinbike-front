import React, {useState} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import MainButton from '../../components/MainButton';
import Constant from '../../components/Constants';
import TextField from '../../components/TextField';
import BackButton from '../../components/BackButton';


const CreateAccount = props=>{
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNext = ()=>{
        if (firstName == ''){
            Alert.alert('Please fill in first name')
        } else if (lastName == ''){
            Alert.alert('Please fill in last name')
        } else if (email == ''){
            Alert.alert('Please fill in Email')
        } else if (password.length <= 5){
            Alert.alert('Password must be minimum 6 characters')
        } else {
            props.navigation.navigate('phone',{
                first_name : firstName,
                last_name : lastName,
                email : email,
                password : password
            });
        }
    }

    return(
        <View style={styles.screen}>
            <BackButton onPress={()=>{props.navigation.goBack()}}/>
            <KeyboardAvoidingView style={{width:'100%'}} behavior={Platform.OS === 'ios' ? "padding" : null}>
                <View style={{alignSelf:'flex-start'}}>
                    <Text style={styles.bigText}>Create</Text>
                    <Text style={styles.bigText}>your account</Text>
                </View>
                <View style={{marginVertical:40}}>
                    <TextField onChanged = {(val)=>{setFirst(val)}} placeholder="First name"/>
                    <TextField onChanged = {(val)=>{setLast(val)}} placeholder="Last name"/>
                    <TextField onChanged = {(val)=>{setEmail(val)}} placeholder="Email"/>
                    <TextField onChanged = {(val)=>{setPassword(val)}} placeholder="Password" password="true"/>
                </View>
            </KeyboardAvoidingView>
           
            <View style={{alignItems:'center', position:'absolute', top: Constant.DEVICE_HEIGHT*0.85}}> 
                <MainButton title='Next'  onPress={()=>{onNext()}}/>

                <View style={{flexDirection:'row', marginTop:20}}>
                    <View style={[styles.progress,{backgroundColor: Constant.PRIMARY_COLOR}]}></View>
                    <View style={[styles.progress,{backgroundColor:'grey'}]}></View>
                    <View style={[styles.progress,{backgroundColor:'grey'}]}></View>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:Constant.DEVICE_WIDTH*0.15,
    },
    bigText:{
        fontSize:30,
        fontWeight:'bold',
    },
    progress:{
        marginHorizontal:3,
        width:10, 
        height:10, 
        borderRadius:50
    }

    
});

export default CreateAccount;