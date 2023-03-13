import React, {useEffect, useState} from 'react';
import {styles} from '../style/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';

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

import {ScrollView, Text, Image, View, TouchableOpacity, ImageBackground} from 'react-native';


const ServicesCard = () => {
  const navigation = useNavigation();
  return (
    <View >
        <ImageBackground resizeMode='cover' source={require('../images/fashion.png')}>
        
        <View style={{height:250, flexDirection:'column', justifyContent:'flex-end', padding:10}}>
        <View>
        <TouchableOpacity onPress={() =>navigation.navigate('Explore')}>
          <View style={styles.inputs}>
            <Ionicons name="search" size={20} color="#7c8389" />
            <Text style={{color: '#7c8389', marginTop: 2}}>
              Search your Product...
            </Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>

        </ImageBackground>
      </View>
  );
};

export default ServicesCard;
