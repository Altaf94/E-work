import React, { useEffect, useState } from 'react';
import { styles } from '../style/style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { Getuid } from '../Redux/Uid';
import { Getid } from '../Redux/Uid';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';


import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const Detailss = ({route}) => {
  const product = useSelector(e => e.ProductReducer);
  const navigation =useNavigation()
  
  const id = route.params
  

  const [float, setFloat] = useState();
  const [saloondetail,setSaloondetail]=useState()

  useEffect(() => {
    fetch(
      `https://saloon123.pythonanywhere.com/Api/float_list_data?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
        setFloat(result);
      })
      .catch(err => console.log(err));
  }, [product.uid]);

  useEffect(() => {
    fetch(
      `https://saloon123.pythonanywhere.com/Api/Detail_Data?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
        setSaloondetail(result)
      })
      .catch(err => console.log(err));
  }, [product.uid]);

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
   <ScrollView>
     <View style={{flexDirection:'row', padding:5, margin:5}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Bookingpage')}>
      <Icon style={{padding:2, margin:5}} name='arrow-left' size={20} color='black' />
      </TouchableOpacity>
      <Text style={{padding:2, margin:5, fontSize:16, color:'black'}}>{product.saloonname}</Text>
      </View> 

      
      <View
          style={{
            flexDirection: 'row',
            padding: 5,
            borderBottomWidth: 0.5,
            borderColor: '#7c8389',
            marginBottom: 10,
            justifyContent:'space-evenly'
          }}>  
          {float?.Saloon_data?.map((e, i) => {
            return (
              <View key={i}>
                <ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate(e.section_name,i)} >
                <Text style={id == i? {color:'black', fontWeight:'bold', width:'100%', fontSize:12, padding:5, margin:5, borderBottomWidth:1, width:'100%'} : {color:'black', fontSize:12, padding:5, margin:5}}>
                    {e.section_name}
                  </Text>
                </TouchableOpacity>
                </ScrollView>
              </View>
            );
          })}
     </View>

    <View>
        {saloondetail?.about_us?.map((e,i)=>{
            return (
                <View  key={i}>
                <Text style={{padding:10, color:'black'}}>ABOUT US</Text>
                 <Text style={{width:'50%', padding:10, color:'black'}}>
                    {e.discription}
                </Text>
                </View>
                
            )
        })} 
    </View>
    <View style={{padding:25}}>
        {saloondetail?.contact_bussines_hour?.map((e,i)=>{
            return (
                <View key={i} style={{margin:5}}>
                    <Text style={{padding:10, color:'black'}}>CONTACT & BUSINESS HOURS</Text>
                 <Text style={{width:'100%', padding:10, color:'black', borderTopWidth:1, borderBottomWidth:1}}>
                    {e.phone_no}
                </Text>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between', marginLeft:10, marginBottom:5, paddingTop:10}}>
                <Text style={{color:'black'}}>Monday</Text>
                <Text style={{width:'30%',color:'black'}}>
                    {e.monday_start_time}-
                    {e.monday_end_time}
                </Text>
               </View>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between', marginLeft:10, marginBottom:5}}>
                <Text style={{color:'black'}}>Tuesday</Text>
                <Text style={{width:'30%',color:'black'}}>
                    {e.tuesday_start_time}-
                    {e.tuesday_end_time}
                </Text>
               </View>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between', marginLeft:10, marginBottom:5}}>
                <Text style={{color:'black'}}>Wednesday</Text>
                <Text style={{width:'30%', color:'black'}}>
                    {e.wednesday_start_time}-
                    {e.wednesday_endtime}
                </Text>
               </View>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between', marginLeft:10, marginBottom:5}}>
                <Text style={{color:'black'}}>Thursday</Text>
                <Text style={{width:'30%',color:'black'}}>
                    {e.thursday_start_time}-
                    {e.thursday_end_time}
                </Text>
               </View>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between',marginLeft:10, marginBottom:5}}>
                <Text style={{color:'black'}}>Friday</Text>
                <Text style={{width:'30%',color:'black'}}>
                    {e.friday_start_time}-
                    {e.friday_end_time}
                </Text>
               </View>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between',marginLeft:10, marginBottom:5}}>
                <Text style={{color:'black'}}>Saturday</Text>
                <Text style={{width:'30%',color:'black'}}>
                    {e.saturday_start_time}-
                    {e.saturday_end_time}
                </Text>
               </View>

               <View style={{flexDirection:'row',color:'black', justifyContent:'space-between',marginLeft:10, marginBottom:5}}>
                <Text style={{color:'black'}}>Sunday</Text>
                <Text style={{width:'30%',color:'black'}}>
                    {e.sunday_start_time}-
                    {e.sunday_end_time}
                </Text>
               </View>

                </View>
                
            )
        })}
    </View>

    <View style={{flexDirection:'row', justifyContent:'center', padding:15}}>
        {saloondetail?.social_media_shares?.map((e,i)=>{
            return (
                <View key={i}>
                 <Text style={{color:'black', textAlign:'center', padding:10}}>
                    {e.icon_name}
                </Text>
                <View style={{width:80, height:80,alignItems:'center'}}>
                <Image width='40%' height='40%' source={{uri:`https://saloon123.pythonanywhere.com/media/${e.icon_img}`}}/>
                </View>
    </View>
                
            )
        })}
    </View>

    <View style={{padding:10}}>
    <Text style={{color:'black', margin:5}} >VENUE AMENITIES</Text> 
        {saloondetail?.venue_amenities?.map((e,i)=>{
            return (
                <View key={i}>
                   
                 <View style={{padding:5}}>
                 <Text style={{color:'black'}}>{e.venue}</Text> 
                 </View>    
                </View>
                
            )
        })}
    </View>

    <View style={{padding:10}}>
    <Text style={{color:'black', margin:5}} >Travel Fees Policy</Text> 
        {saloondetail?.travel_fees_policy?.map((e,i)=>{
            return (
                <View key={i}>
                 <View style={{padding:5}}>
                 <Text style={{color:'black'}}>{e.discription}</Text> 
                 </View>    
                </View>
                
            )
        })}
    </View>

    <View style={{padding:10}}>
    <Text style={{color:'black', margin:5}} >Payment Cancellation Policy</Text> 
        {saloondetail?.payment_cancellation_policy?.map((e,i)=>{
            return (
                <View key={i}>
                 <View style={{padding:5}}>
                 <Text style={{color:'black'}}>{e.discription}</Text> 
                 </View>    
                </View>
            )
        })}
    </View>
 

    </ScrollView>
    </View>
  );
};

export default Detailss; 

