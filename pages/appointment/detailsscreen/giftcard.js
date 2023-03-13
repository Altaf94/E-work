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

const Giftcard = ({route}) => {
  const product = useSelector(e => e.ProductReducer);
  const navigation =useNavigation()
  const id = route.params
  const [giftcard,setGiftcard]=useState()
  console.log(giftcard)
  

  const [float, setFloat] = useState();

  useEffect(() => {
    fetch(
      `https://saloon123.pythonanywhere.com/Api/giftcard_data?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
       setGiftcard(result)
      })
      .catch(err => console.log(err));
  }, [product.uid]);


  return (
    <View>

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

     <View style={{padding:25, margin:25}}>
      {giftcard?.GiftCard?.map((e,i) =>{
        return(
        
          <View key={i}  style={{borderWidth:1, margin:25, padding:20, borderColor:'grey', borderRadius:20}}>
          <View>
            <Text>{e.name}</Text>
            <Text>{`$${e.price}`}</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Text style={{ color:'black', fontWeight:'bold', backgroundColor:'#00a2ad',padding:10, borderRadius:5, margin:5, paddingLeft:20, paddingRight:20}}>Order</Text>
          </View>
          </View>
        )
      })}
     </View>



    </View>
  );
};

export default Giftcard; 

