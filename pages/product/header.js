import React, { useEffect, useState } from 'react';
import { styles } from '../style/style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useDispatch } from 'react-redux';
import { Getuid } from '../Redux/Uid';
import { Getid } from '../Redux/Uid';
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



import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const AppHeader = () => {
 
  const navigation = useNavigation();
  const [isloading,setIsloading]=useState(false)
  const [headerdata,setHeaderdata]=useState("") 
  const dispatch =useDispatch()
 


  useEffect(()=>{
  setIsloading(true)
  fetch('https://saloon123.pythonanywhere.com/Api/Showsaloon').then((result)=>result.json())
  .then((data)=>
  {
    setHeaderdata(data) 
    setIsloading(false)
  })
  .catch((err)=>
  {
    console.log(err)
    setIsloading(false)
  })
  },[])

   
  return (
   
    <View style={{backgroundColor:'#170800', flex:1}}>
      <View style={styles.Header}> 
      <Text style={{color:'white', margin:5, fontSize:18, fontWeight:'bold', paddingLeft:20}}>Choose Your Category</Text> 
      <View>
        {isloading? < BallIndicator size={20} style={{paddingTop:80}} color='white'/> : <ScrollView showsHorizontalScrollIndicator={false}  style={styles.scrolling} horizontal={true}>
          {headerdata?.Services?.map((e,i) => {
            return (
              <View key={i} style={{marginRight:20}}>
                <TouchableOpacity onPress={()=>{{dispatch(Getid(i));dispatch(Getuid(e));navigation.navigate('Explore')}}}>
                  <Image style={styles.logos} source={{uri:`https://saloon123.pythonanywhere.com/media/${e.image}`}}/>
                </TouchableOpacity>
                <View>
                <Text style={styles.ScrollViewtext}>{e.service_name}</Text>
                </View>
               </View>
              
            )
          })}
        </ScrollView>}
        </View> 
      </View>
    </View> 
  );
};

export default AppHeader; 
