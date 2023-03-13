import React, { useState } from 'react';
import { styles } from '../style/style';
import CalendarPicker from 'react-native-calendar-picker';


import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Datepicker = () => {

  const [date,setDate] =useState()
  console.log(date)
  const minDate = new Date(2022, 12, 1);


  return (
    <View>
      <CalendarPicker
      minDate={minDate}
      allowRangeSelection={true}
      selectedDayColor="lightblue"
      onDateChange={e=>setDate(e)}



      />

    </View>
    
  );
};



export default Datepicker; 
