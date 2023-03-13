import React, {useEffect, useState} from 'react';
import {styles} from '../style/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import { GetPaymentUri } from '../Redux/paymenturi';
import { useDispatch } from 'react-redux';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Modal,
} from 'react-native';


const Payment = ({route}) => {
  const Paymentamount = route.params;
  const currency = 'USD';
  const [isloading,setIsloading]=useState(false)
  const navigation =useNavigation()
  const booking = useSelector(e => e.Bookingdetailreducer)
  const dispatch = useDispatch()

  const formData = new FormData();
  formData.append('amount', Paymentamount);
  formData.append('currency', currency);


 

  const Payment = async () => {
    setIsloading(true)
    let result = await fetch(
      'https://saloon123.pythonanywhere.com/Api/PaymentView',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          "Accept": 'application/json',
        },
      },
    )
      .then((result) => result.json())
      .then(data => {
       dispatch(GetPaymentUri(data))
       setIsloading(false)
      })
      .catch(err => Alert('yes'));
  };

  return (
    <View style={{backgroundColor: '#170800', flex: 1}}>
      <ImageBackground
        style={{height: 250}}
        source={require('../images/coverphoto.jpg')}
      />

      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
              padding: 15,
              fontWeight: 'bold',
            }}>
            Booking Details
          </Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
           {booking?.map((e,i) =>{
            return(
              <View style={{padding:10, margin:10, backgroundColor:'#212121', paddingTop:50, paddingBottom:50, borderRadius:5}}>
                <Text style={{color:'white'}}>{`Saloon Name:${e.name}`}</Text>
                <Text style={{color:'white'}}>{`Price: $${e.price}`}</Text>
               
              </View>
            )
           })}
          </View>
        </View>

        {isloading? <BallIndicator size={20} color='white' /> :<View>
          <TouchableWithoutFeedback onPress={()=>{Payment(),navigation.navigate('Paypalview')}}>
            <View style={{flexDirection:'row', justifyContent:'flex-end', padding:50}}>
            <Text
              style={{
                backgroundColor: '#a58430',
                padding: 15,
                marginTop: 20,
                textAlign: 'center',
                paddingLeft:35,
                paddingRight:35,
                borderRadius: 5,
                color: 'white',
                fontWeight: 'bold',
              }}>
              PROCEED
            </Text>
            </View>
          </TouchableWithoutFeedback>
        </View> }
      </View>
    </View>
  );
};

export default Payment;
