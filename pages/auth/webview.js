import React, { useEffect, useState } from 'react';
import { styles } from '../style/style';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';


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





const Paypalview = () => {

const uri = useSelector(e =>e.PaymentUriReducer)
const {token} = uri
const [paymentId, setPaymentId]=useState() 



 const Payerid = async() =>{
  const formData = new FormData();
  formData.append('paymentId', paymentId);
  let result = await fetch('https://saloon123.pythonanywhere.com/Api/PaymentExecutionView',{
    method:'POST', 
    body:formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  }).then(result => result.json()).then((data) =>{
    console.log(data)
  }).catch(err => console.log(err))
 } 

 useEffect(() =>{
  Payerid()
 }, [paymentId])


  const State = (e) =>{
    const {url, title} = e
   if(title == "PayPal Checkout"){ 
   const urlsplited = url.split('?')
   const halfsplited = urlsplited[1].split('&')
   const paymentId = halfsplited[0]?.replace("paymentId=","")
   const token  = halfsplited[1]?.replace("token=","")
   const PayerID  = halfsplited[2]?.replace("PayerID","")
   setPaymentId(paymentId)
   }
  }

 
 

  return (
  
    <WebView
        onNavigationStateChange={State}
        source={{ uri: token.redirect_url}}
        
      /> 
    
  );
};

export default Paypalview;
