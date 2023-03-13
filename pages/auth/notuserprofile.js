import React, {useEffect, useState} from 'react';
import {styles} from '../style/style';
import Continue from '../Component/Continuebutton';
import {ActivityIndicator} from 'react-native';
import Toast from 'react-native-toast-message';
import {showMessage, hideMessage} from 'react-native-flash-message';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-animatable';

const NotuserProfile = () => {
  let navigation = useNavigation();

  let [email, setEmail] = useState();
  let [message, setMessage] = useState('');
  let [isloading, setIsloading] = useState(false);

  const formData = new FormData();

  formData.append('email', email);

  const Verification = async () => {
    setIsloading(true);
    let result = await fetch(
      'https://saloon123.pythonanywhere.com/Api/Otp_sending',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      },
    )
      .then(result => result.json())
      .then(data => {
        if (data.status == true) {
          navigation.navigate('Verification', {data: data.otp, email: email});
        }
        if (data.status == true) {
          Toast.show({
            type: 'success',
            text1: data.message,
            position: 'bottom',
          });
        } else {
          Toast.show({
            type: 'info',
            text1: data.message,
            position: 'bottom',
          });
        }
        setIsloading(false);
        console.log(data);
        setMessage(data.message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const showToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: message,
  //   });
  // }

  return (
    <View style={{backgroundColor: '#170800', flex: 1}}>
      <StatusBar backgroundColor="#a58430" />
      <View
        style={{
          width: '100%',
          height: "30%",
          borderBottomLeftRadius: 500,
          borderBottomRightRadius: 500,
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
      <ScrollView horizontal={false}>
        <View style={styles.ProfilePadding}>
          <Text style={styles.Profile}>My Email Address is:</Text>
          <TextInput
            required
            placeholderTextColor="white"
            placeholder="Email"
            style={styles.profileInput}
            onChangeText={e => setEmail(e)}
          />
        </View>

        <View style={{paddingTop: 150}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 320,
              alignSelf: 'center',
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />

            <View>
              <Text style={{padding: 10, alignSelf: 'center', color: 'white'}}>
                OR
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          </View>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={Verification}>
            <Text>{isloading ? <ActivityIndicator /> : <Continue />}</Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 15, color: 'white'}}>Are you Login?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Loginpage', email);
              }}>
              <Text
                style={{
                  marginLeft: 5,
                  marginTop: 2,
                  color: '#a58430',
                  fontSize: 14,
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotuserProfile;
