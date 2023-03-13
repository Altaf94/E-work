// 
import React, { useState } from 'react';
import { styles } from '../style/style';
import { useSelector } from 'react-redux';
import NotuserProfile from './notuserprofile'
import Dashboard from './dashboard'

import {

  View,
} from 'react-native';


const Profile = () => {

  const Token = useSelector((e) => e.TokenReducer)
  const TokenNumber = Token.token

  return (
    <View style={{flex:1}}>

    {TokenNumber? <Dashboard/> : <NotuserProfile/>
  }
      
      </View>
    
    
  );
};

export default Profile;
