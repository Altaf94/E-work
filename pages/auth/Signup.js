import React, {useState} from 'react';
import {styles} from '../style/style';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {edit} from '../Redux/loginreducer';

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Loginpage = ({route}) => {
  const [email, setEmail] = useState(route.params);
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [isloading, setisloading] = useState(false);

  const navigation = useNavigation();
  const disptach = useDispatch();

  const formData = new FormData();
  formData.append('firstname', firstname);
  formData.append('lastname', lastname);
  formData.append('password', password);
  formData.append('contact', contact);
  formData.append('email', email);

  const registerData = async () => {
    setisloading(true);
    let result = await fetch(
      'https://saloon123.pythonanywhere.com/Api/Register',
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
        setMessage(data);
        setisloading(false);
        if (data.message === 'Email already exists') {
          navigation.navigate('Loginpage');
        }
        if (data.message === 'Account Created Successfully') {
          navigation.navigate('Loginpage');
        }
      })
      .catch(error => {
        setisloading(false);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#170800'}}>
      <View
        style={{
          width: '100%',
          height: 300,
          borderBottomLeftRadius: 500,
          borderBottomRightRadius: 500,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}>
        <Image source={require('../images/headerphoto.jpg')} />
      </View>
      <ScrollView horizontal={false}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            textAlign: 'center',
            marginTop: 50,
          }}>
          Create New Account
        </Text>
        <TextInput
          style={styles.Logininputs}
          onChangeText={e => setFirstname(e)}
          placeholder="Firstname"
          placeholderTextColor="#FFF"></TextInput>
        <TextInput
          style={styles.Logininputs}
          onChangeText={e => setLastname(e)}
          placeholder="Lastname"
          placeholderTextColor="#FFF"></TextInput>
        <TextInput
          style={styles.Logininputs}
          keyboardType={'phone-pad'}
          onChangeText={e => setContact(e)}
          placeholder="Contact"
          placeholderTextColor="#FFF"></TextInput>
        <TextInput
          style={styles.Logininputs}
          editable={false}
          placeholder="Email address"
          placeholderTextColor="#FFF">
          {email}
        </TextInput>
        <TextInput
          style={styles.Logininputs}
          onChangeText={e => setPassword(e)}
          placeholder="password"
          secureTextEntry={true}
          placeholderTextColor="#FFF"></TextInput>
        <TouchableOpacity onPress={registerData} style={{marginTop: 30}}>
          {isloading ? (
            <ActivityIndicator size={50} color="white" />
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
                REGISTER
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={{textAlign: 'center', padding: 10}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            {message.message}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Loginpage;
