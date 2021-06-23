import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Button } from 'react-native';
import Constant from '../../components/Constants';
import MainButton from '../../components/MainButton';
import {Icon} from 'react-native-elements';
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationActions, StackActions } from 'react-navigation';



const ScanParking = props=>{
    //const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{ resetStack('tripInfo')}, 3000);
        //setTimeout(()=>{ alert('hello')}, 1000);
 
     });

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

    // useEffect(() => {
    //     (async () => {
    //       const { status } = await BarCodeScanner.requestPermissionsAsync();
    //       setHasPermission(status === 'granted');
    //     })();
    //   }, []);

    // const handleBarCodeScanned = ({ type, data }) => {
    //     setScanned(true);
    //     alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    //   };

    // if (hasPermission === null) {
    //     return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

    return(
        <View style={styles.screen}>
             <Image 
                    source={require("../../assets/images/endTripScan.png")}
                    resizeMode='contain'
                /> 

            {/* <Header title='Scan QR' onBack={()=>{props.navigation.goBack()}}/>
            <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
                  {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}

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

export default ScanParking;