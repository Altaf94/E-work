import React, {useEffect, useState} from 'react';
import {styles} from '../style/style';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/loginreducer';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableWithoutFeedback,
  TextInput,
  View,
  Modal,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Dashboard = () => {
  const detail = useSelector(e => e.TokenReducer);
  const navigation = useNavigation();
  const disptach = useDispatch();
  const [showmodelsecond, setShowmodelsecond] = useState(false);
  const [cameraPhoto, setCameraphoto] = useState('');

  const log = () => {
    disptach(logout());
    if (detail.token == null) {
      navigation.navigate('Booksy');
    }
  };

  const OpenCamera = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      const source = {
        uri: 'data:image/jpeg;base64,' + response.assets[0].base64,
      };
      setCameraphoto(source);
    });
  };

  const OpenGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      const source = {
        uri: 'data:image/jpeg;base64,' + response.assets[0].base64,
      };
      setCameraphoto(source);
    });
  };

  const showsecondmodel = () => {
    if (!showmodel) {
      setShowmodelsecond(true);
    } else {
      setShowmodelsecond(false);
    }
  };

  return (
    <View style={{backgroundColor: '#170800', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 50,
        }}>
        <Ionicons size={30} name="arrow-back" color="white" />
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Profile
        </Text>
        {/* <MaterialIcons size={30} name='edit' color='white' /> */}
      </View>

      {cameraPhoto ? (
        <Image
          style={{
            width: '30%',
            height: '15%',
            borderRadius: 100,
            alignSelf: 'center',
          }}
          source={cameraPhoto}
        />
      ) : (
        <Image
          style={{
            width: '30%',
            height: '15%',
            borderRadius: 100,
            alignSelf: 'center',
          }}
          source={require('../images/person.jpg')}
        />
      )}

      <View style={{position: 'relative', bottom: 40, left: 180}}>
        <TouchableOpacity onPress={() => setShowmodelsecond(true)}>
          <AntDesign name="pluscircle" color="orange" size={30} />
        </TouchableOpacity>
      </View>

      <View style={{padding: 20, margin: 20}}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Name of Person
        </Text>
        <TextInput
          style={{borderBottomWidth: 1, borderColor: 'white', color: 'white'}}>
          {detail.firstname}
        </TextInput>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Email
        </Text>
        <TextInput
          style={{borderBottomWidth: 1, borderColor: 'white', color: 'white'}}>
          {detail.email}
        </TextInput>
      </View>

      <Modal transparent={true} visible={showmodelsecond} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setShowmodelsecond(false)}>
          <View style={{height: '100%', width: '100%'}}>
            <View
              style={{
                backgroundColor: '#212121',
                borderTopEndRadius: 5,
                borderTopLeftRadius: 5,
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: 50,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Image Upload
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  paddingTop: 30,
                }}>
                <TouchableOpacity onPress={() => OpenCamera()}>
                  <View
                    style={{
                      padding: 20,
                      borderRadius: 5,
                      backgroundColor: '#a58430',
                    }}>
                    <Text
                      style={{
                        paddingRight: 25,
                        paddingLeft: 25,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Open Camera
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => OpenGallery()}>
                  <View
                    style={{
                      padding: 20,
                      borderRadius: 5,
                      backgroundColor: '#a58430',
                    }}>
                    <Text
                      style={{
                        paddingRight: 35,
                        paddingLeft: 35,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Open Gallery
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Dashboard;
