import React, { useState } from 'react';
import { styles } from '../style/style';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';


const Mapping = () => {
 
 
  
  return (

    <>
    <View>
    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{
        height: "100%",
        width: '100%',
       }}
       region={{
         latitude: 24.8607,
         longitude: 67.0011,
         latitudeDelta: 24.8607,
         longitudeDelta: 67.0011,
       }}
     >
      <Marker
      coordinate={{
        latitude: 24.8607,
        longitude: 67.0011,
         
      }} />

     </MapView>
    </View>
    </>
    
  );
};



export default Mapping; 
