import React, {useState, Component } from 'react';
import { styles } from '../style/style';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageSlider from 'react-native-image-slider';



const Specialoffer = ({route}) => {

  const obj = route.params
  

  const images = [
    require('../images/haair3.png'),
    require('../images/haiir2.png'),
    require('../images/hair3.png'),
  ];

  return (
    <>
    <View style={styles.SliderImage}>
     <ImageSlider  images={images} />
     </View>
    </>
    
    
  );
};

export default Specialoffer;
