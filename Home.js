import React, { useState } from 'react';
import AppHeader from './pages/product/header.js';
import Data from './pages/product/data.js';
import Recommended from './pages/product/recommended.js';
import Cards2 from './pages/product/cards2.js';
import ServicesCard from './pages/product/servicescard.js';



import {
  ScrollView,
  View,
  TextInput,
  StatusBar
} from 'react-native';


const Home = () => {
  
  return (
    
    <View style={{flex:1, backgroundColor:'#170800'}}>
      <StatusBar backgroundColor='#a58430' />
      <ScrollView>
       <ServicesCard />
       <AppHeader />
       <Data />
       <Cards2 />   
       <Recommended /> 
      </ScrollView>
    </View>
  
    
  
  );
};



export default Home;
