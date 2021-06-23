import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Platform, Image, Alert, KeyboardAvoidingView, ScrollView} from 'react-native';
import Constant from '../../components/Constants';
import MainButton from '../../components/MainButton';
import Header from '../../components/Header';
import SecondaryButton from '../../components/SecondaryButton';


const ReportFaulty = props=>{ 
    const [activeCategories, setActive] = useState([]);

    const buttonLogic =(title)=>{
        if (activeCategories.includes(title)){
            var array = [...activeCategories]

            var index = array.indexOf(title);
            if (index !== -1) {
                array.splice(index, 1);
                setActive(array)

                //alert(array)
            }
        }else{
            setActive([...activeCategories,title])
        }
    }

    const categoryButton =(title)=>{
        //alert(activeCategories)
        return(
            <TouchableOpacity activeOpacity={1} onPress={()=>buttonLogic(title)} style={activeCategories.includes(title)?styles.activeButton:styles.inactiveButton}>
                <Text style={activeCategories.includes(title)?styles.activeText:styles.inactiveText}>{title}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.screen}>
            <Header title='Report faulty bike' onBack={()=>{props.navigation.goBack()}}/>

            <ScrollView>

            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} >
            <Text style={styles.fontTitle}> Bike ID : 1231097293 </Text>
            <Text style={styles.fontTitle}> Type </Text>

            <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'space-around', alignItems:'flex-start'}}>
                {categoryButton('Flat Tire')}
                {categoryButton('Seat')}
                {categoryButton('Gear')}
                {categoryButton('Front Light')}
                {categoryButton('Others')}
                <View style={{marginVertical:10,width: Constant.DEVICE_WIDTH *0.35,}}>
                </View>
            </View>

            <Text style={styles.fontTitle}> Details </Text>
           
            <View style={styles.detailView} >
                <TextInput
                    // onSubmitEditing ={()=>{alert('hello')}}
                   // secureTextEntry={props.password?true:false}
                   blurOnSubmit ={true}
                    clearButtonMode='while-editing'
                    placeholder= 'Provice details of the faulty (optional).'
                    placeholderTextColor="#cecece"
                    returnKeyType="done"
                    //autoCapitalize="none"
                    style={{padding:0}}
                    multiline
                     numberOfLines={4}
                    //maxLength={11}
                    onChangeText={(val) => {
                        
                    }}
                />
            </View>

            </KeyboardAvoidingView>
            </ScrollView>


            
            

            <View style={{position:'absolute', bottom:Constant.DEVICE_HEIGHT*0.1}}>
                <SecondaryButton title='Report' onPress={()=>{Alert.alert('report bike')}}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
        //justifyContent:'center',
        paddingHorizontal:30,
    },
    fontTitle:{
        fontWeight:'bold', 
        textAlign:'left', 
        alignSelf:'flex-start',
        marginVertical:10,
    },
    activeButton:{
        marginVertical:15,
        backgroundColor:Constant.PRIMARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
        width: Constant.DEVICE_WIDTH *0.35,
        paddingVertical:14,
        borderRadius:50,
    },
    activeText:{
        color:'white',
        fontWeight:'bold',
    },
    inactiveButton:{
        marginVertical:15,
        borderColor:Constant.GREY_COLOR,
        borderWidth:1,
        alignItems:'center',
        width: Constant.DEVICE_WIDTH * 0.35,
        paddingVertical:13,
        borderRadius:50,
    },
    inactiveText:{
        color:Constant.GREY_COLOR,
        fontWeight:'600',
    },
    detailView:{
        backgroundColor:'#f0f0f0', 
        width:'100%', 
        height: Constant.DEVICE_HEIGHT*0.15, 
        borderRadius:10,
        padding:10,
    }
});

export default ReportFaulty;