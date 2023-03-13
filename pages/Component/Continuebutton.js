import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import { styles } from './style';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Continue = () => {


  return (
    <View><Text style={{backgroundColor:'#a58430', color:'white', fontWeight:'bold', padding:15, width:350, textAlign:'center', borderRadius:5}}>Continue</Text></View>
 
  );
};



export default Continue; 
