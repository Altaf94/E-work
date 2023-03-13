import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import { styles } from './style';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';



const Facebookbutton = () => {


  return (
    <View><Text style={{backgroundColor:'#ADD8E6', padding:15, width:350, textAlign:'center', borderRadius:5}}>SIGN IN WITH FACEBOOK</Text></View>
 
  );
};



export default Facebookbutton; 
