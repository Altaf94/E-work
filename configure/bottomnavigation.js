import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home.js';
import Explore from '../pages/product/product.js'
import Profile from '../pages/auth/profile.js';
import Appointment from '../pages/appointment/appointment.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function Bottomnavigator() {

  return (
    <Tab.Navigator 
 
 screenOptions={({route}) => ({
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor:'white',
  headerShown: false,
  tabBarStyle:{
    backgroundColor: '#a58430',
    height:55,
    paddingBottom:8,
    paddingTop:4
  },
  tabBarLabelStyle: {
    fontSize: 10,

  },
  labelstyle:{
    margin:10
  },
tabBarIcon: ({color, size}) =>{
  let iconName;
  if(route.name === 'Market'){
    iconName='heart-outline'
    size= 20;
  }else if(route.name ==='Explore'){
    iconName='search-outline'
    size= 20;
  }else if(route.name === 'Cart'){
    iconName='cart'
    size= 20;
  }else if(route.name === 'Profile'){
    iconName='person-outline'
    size= 20;
  }
  return (
    <Ionicons name={iconName}
    size ={size}
    color={color} />
  )
}
}
)

 }   
>
      <Tab.Screen name="Market" component={Home} />
      <Tab.Screen name="Explore" component={Explore}  />
      <Tab.Screen name="Cart" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile}  />
      
  
    </Tab.Navigator>
  );
}

export default Bottomnavigator;