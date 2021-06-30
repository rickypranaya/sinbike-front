import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView,FlatList, TextInput, TouchableOpacity, Platform, Alert } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Header from '../../components/Header';
import { NavigationActions, StackActions } from 'react-navigation';
import Constant from '../../components/Constants';
import {Icon} from 'react-native-elements';

const Contact = props=>{

   // var randId = Math.random();
    var now = new Date();
    var hours = now.getHours().toString().length ==1?  '0'+now.getHours().toString():now.getHours();
    var minutes = now.getMinutes().toString().length ==1?  '0'+now.getMinutes().toString():now.getMinutes();
    var formatTime = '01234567890'+hours +':'+ minutes;

    const [data, setData] = useState([
        {
            'id': '93412',
            'message': 'Hi, how can we help you?',
            'time': formatTime,
            'sender_id': 0,
            'status' : '0'
        },
       
    ])
      const [message, setMessage] = useState('')
      const[textInputHeight, setTextInputHeight] = useState(0)
      const inputEl2 = useRef(null);

      

    

    const onBack = (from) => {
        props
          .navigation
          .dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'home',
                params: { drawer: from },
              }),
            ],
          }))
       }


       const renderItem=(item)=>{
        // var months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
        // var dateString = item.time;
        // var today = new Date();
        // var date = new Date((item.time).substring(0,10));
        // date.setHours(0);
        // var diff = parseInt((today- date) / (1000 * 60 * 60 * 24), 10);
        var type = item.id;
        var color = null;
        var align = null;
        var textColor = null;
        var self = null;
        var messageTime = null;
  
         if (item.sender_id == 0){
          color = 'white';
          align = 'flex-start';
          textColor = 'black';
          self= false;
  
        } else{
          color = '#DEDEDE';
          align = 'flex-end';
          textColor = 'black';
          self= true;
  
        }
  
        // if (diff == 0){
        //   messageTime = 'Today';
        // } else if (diff == 1){
        //   messageTime = 'Yesterday';
        // } else{
        //   messageTime = months[date.getMonth()] +' '+date.getDate();
        // }
  
        return(
          <View>
          {/* {this.state.chatDate.includes(dateString)? */}
          {/* <View style={{backgroundColor:'lightgrey', padding:8,borderRadius:20,alignSelf:'center', marginBottom:15}}>
            <Text style={{fontSize:13, color:'grey'}}>Today</Text>
          </View>  */}
          {/* : null} */}
  
          <View style={{alignSelf: align, alignItems:align, maxWidth:Constant.DEVICE_WIDTH*0.7,marginVertical:verticalScale(3),marginHorizontal:moderateScale(20)}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            {/* {this.state.errorMessages.includes(item.id) ?
            <Icon
              containerStyle={{marginHorizontal:10}}
              //reverse
              //raised
              name='error'
              type='material'
              color='red'
              size={25}
            /> : null} */}
            <View style={{backgroundColor:color, paddingHorizontal:10, paddingVertical:9,borderRadius:15, borderBottomRightRadius:self?0:15, borderTopLeftRadius: self? 15:0}}>
               <Text style={{fontSize:16, fontWeight:'400', color:textColor}}>{item.message}</Text>
            </View>
            </View>
              <View style={{flexDirection:'row',marginTop:5, marginHorizontal:5,alignItems:'center'}}>
                {self ?
                <Icon
                  containerStyle={{marginHorizontal:5}}
                  //reverse
                  //raised
                  name='done-all'
                  type='material'
                // color='#0076FE'
                color={item.status == '0'? 'grey': '#0076FE' }
                  size={18}
                />
                  : null} 
                <Text style={{fontSize:13, color:'grey'}}>{ (item.time).substring(11,16)}</Text>
              </View>
          </View>
          </View>
          );
      }

      const sendMessage=()=>{
       // this.textInput.clear();
       inputEl2.current.clear();
        // setTimeout(() => { inputEl2.clear()}, 100);
  
        var dataTemp = data;
        var now = new Date();
        var hours = now.getHours().toString().length ==1?  '0'+now.getHours().toString():now.getHours();
        var minutes = now.getMinutes().toString().length ==1?  '0'+now.getMinutes().toString():now.getMinutes();
  
        var formatTime = '01234567890'+hours +':'+ minutes;
        var randId = Math.random();
        // dataTemp.unshift({
        //   'id': randId.toString(),
        //   'message': message,
        //   'time': formatTime,
        //   'sender_id': 1,
        //   'status' : '0'
  
        // });
    //  alert(JSON.stringify(this.emojiUnicode(this.state.message)))
  
        // NetInfo.fetch().then(state => {
        //     if (state.isConnected) {
        //     //  this.addChat();
        //     //  this.sendNotif();
              
         setData([
            {
            'id': randId.toString(),
            'message': message,
            'time': formatTime,
            'sender_id': 1,
            'status' : '0'
          },...data])

              
            // } else {
            //     var errList = this.state.errorMessages;
            //     errList.unshift(randId);
            //     //alert(constant.NOINTERNET)
            //     this.setState({
            //       data: dataTemp,
            //       errorMessages:errList
            //     })
            // }
        // });
      }

    return(
        <View style={styles.screen}>
            <Header title='Customer Support' onBack={()=>{onBack('contact')}}/>
            <Text></Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : null} style={{flex:1}} >

              <FlatList
                 style={{ backgroundColor: '#f0f0f0' }}
                 data={data}
                 renderItem={({ item }) => renderItem(item)}
                 inverted={-1}
                 keyExtractor={item => item.id}
               />

               <View style={{alignItems:'center', justifyContent:'center',width:Constant.DEVICE_WIDTH,  backgroundColor:'#f0f0f0', height:verticalScale(48)+textInputHeight}}>
                 
                 <View style={{
                    zIndex: 0,
                    shadowOffset: { width: 0, height: 1},
                    shadowColor: 'grey',
                    shadowOpacity: 0.3,
                    elevation: 5,
                    borderRadius:15,
                    flexDirection:'row',
                    width:Constant.DEVICE_WIDTH*0.89,
                    backgroundColor:'white',
                    alignItems:'center',
                    paddingHorizontal:10,
                    paddingVertical:verticalScale(6),
                    //marginBottom:20,
                    justifyContent:'space-between'
                  }}>
                      

                        <TextInput
                          ref={inputEl2}
                          multiline={true}
                          placeholder="Write your message..."
                          style={{ width: Constant.DEVICE_WIDTH*0.7,height: Platform.OS === 'ios' ? textInputHeight+12 : textInputHeight , paddingHorizontal:10, fontSize:16}}
                          onChangeText={text => setMessage(text)}
                          onContentSizeChange={(event)=>{
                            var height= event.nativeEvent.contentSize.height;
                            if (height<100){
                                setTextInputHeight(event.nativeEvent.contentSize.height)
                            }
                          }}
                        />
                        <View style={{ height:'100%'}}>
                        <TouchableOpacity onPress={()=>{message == ''?null: sendMessage()}} style={{backgroundColor: Constant.PRIMARY_COLOR, height:37,width:37, borderRadius:12, justifyContent:'center'}}>
                          <Icon
                            //reverse
                            //raised
                            name='send'
                            type='font-awesome'
                            color='white'
                            size={15}
                          />
                        </TouchableOpacity>
                        </View>
                        
                       

                  </View> 
                </View>
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems:'center',
       // justifyContent:'center',
    },
});

export default Contact;