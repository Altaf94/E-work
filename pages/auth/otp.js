import React, { cloneElement, useState } from 'react';
import { styles } from '../style/style.js';
import OtpInputs from 'react-native-otp-inputs';
import { useNavigation } from '@react-navigation/native';




import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';




const Verification = ({route}) => {

  const otp = route.params.data
  const email = route.params.email
  console.log(otp)

  const [matchotp,setMatchotp]=useState()
  const navigation =useNavigation()

  const matchOtp = () =>{
    if(otp == matchotp){
      navigation.navigate('Signup', email)
    }
  }

  return (
    <View style={{flex:1, backgroundColor:'#170800'}}>
       <View style={{width:'100%',
      height: 300,
      borderBottomLeftRadius: 600,
      borderBottomRightRadius: 600,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: '#fff',
      overflow: 'hidden'}}>
      <Image source={require('../images/headerphoto.jpg')}/>
      </View>
      
    <Text style={{color:'white', fontWeight:'bold' , textAlign:'center', fontSize:25, paddingTop:20}}>Enter the 6-digit code</Text>
    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:20}}>We have sent OTP on your number</Text>
   
    <View style={{textAlign:'center', padding:50}}>
    <OtpInputs style={{width: '100%', flexDirection:'row', justifyContent:'space-around'}}
          numberOfInputs={6}
          inputContainerStyles={styles.borderStyleHighLighted}
          inputStyles={styles.underlineStyleBase}
          handleChange={(e) => setMatchotp(e)}

        />
    </View>
    
  <View style={{padding:50, flexDirection:'row',justifyContent:"space-evenly"}}>
  <Text style={{color:'white', textAlign:'center',  fontSize:15}}>Didn't Recieved the code?</Text> 
  <TouchableOpacity>
    <Text style={{color:'white', textAlign:'center', fontSize:15}} >Request again</Text>
  </TouchableOpacity>
   </View>

  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <TouchableOpacity onPress={matchOtp}>
    <Text style={{backgroundColor:'#a58430', fontWeight:'bold', padding:15, borderRadius:10, color:'white'}}>Verify the account</Text>
    </TouchableOpacity>
  </View>   
    </View> 
    
  );
};

export default Verification;
