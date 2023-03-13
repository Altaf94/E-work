import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';

import {ImageBackground, Text, Image, View, Dimensions, StatusBar} from 'react-native';


const LandingPage = () => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  return (
    
    <View style={{backgroundColor:'#170800', flex:1, flexDirection:'column', justifyContent:'center'}}>
    <StatusBar backgroundColor="#0f0500" />
    <Animatable.View
      animation="pulse"
      easing="ease-out"
      iterationCount="infinite"> 
      <View style={{alignItems:'center'}}>
       <Image  source={require('../images/darazlogo.png')}/>
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{fontSize:20, color:'#a58430'}}>🅴🅲🅾🅼🅼🅴🆁🅲🅴 🆆🅾🆁🅻🅳</Text>
      </View> 
        
         {/* <ImageBackground
          style={{width: width, height: height}}
          source={require('../images/splash1.jpg')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 350, height: 350}}
                source={require('../images/splasg2.png')}
              />
            </View>
          </View>
        </ImageBackground>  */}
      
     </Animatable.View> 
    </View>
    
  );
};

export default LandingPage;
