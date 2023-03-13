import React, {useEffect, useState} from 'react';
import {styles} from '../style/style';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
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
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {add} from '../Redux/loginreducer';

const Loginpage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isloading, setisloading] = useState(false);
  const Booking = useSelector(e => e.Bookingdetailreducer);
  console.log(Booking);

  const Login = async () => {
    setisloading(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    let result = await fetch('https://saloon123.pythonanywhere.com/Api/login', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
      .then(result => result.json())
      .then(data => {
        setMessage(data);
        const {status} = data;
        {
          Booking.length === 1 && status == true
            ? navigation.navigate('Bookingproceed')
            : navigation.navigate('Market');
        }
        // if (status == true && ) {
        //   console.log('first');
        // } else if (length.length > 1 && status == true ) {
        //   console.log('second');
        // }
        // else{
        //   console.log('no idea')
        // }
        // if (data.message === 'Login Successlly') {
        //   console.log(data.message)
        //   navigation.navigate('Booksy');
        // }
        // if (data.status == true) {
        //   navigation.navigate('Verification', {data: data.otp, email: email});
        // }
        if (data.status == true) {
          Toast.show({
            type: 'success',
            text1: data.message,
          });
        } else {
          Toast.show({
            type: 'info',
            text1: data.message,
          });
        }

        dispatch(add(data));
        setisloading(false);
      })
      .catch(err => {
        setisloading(false);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#170800'}}>
      <View
        style={{
          width: '100%',
          height: "28%",
          borderBottomLeftRadius: 600,
          borderBottomRightRadius: 600,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
          source={require('../images/headerphoto.jpg')}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            textAlign: 'center',
            marginTop: 5,
          }}>
          🅴🅲🅾🅼🅼🅴🆁🅲🅴 🆆🅾🆁🅻🅳
        </Text>
        <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            textAlign: 'center',
            marginTop: 5,
          }}>
          Login to your account
        </Text>
        <TextInput
          onChangeText={e => setEmail(e)}
          style={styles.Logininputs}
          placeholder="Username"
          placeholderTextColor="white"></TextInput>
        <TextInput
          onChangeText={e => setPassword(e)}
          style={styles.Logininputs}
          placeholder="password"
          placeholderTextColor="white"
          secureTextEntry={true}></TextInput>
        <TouchableOpacity style={{padding: 20}} onPress={Login}>
          {isloading ? (
            <BallIndicator style={{padding: 20}} size={30} color="white" />
          ) : (
            <View style={{alignSelf: 'center', width: 200}}>
              <Text
                style={{
                  backgroundColor: '#a58430',
                  padding: 15,
                  marginTop: 20,
                  textAlign: 'center',
                  borderRadius: 5,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                LOGIN
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loginpage;
