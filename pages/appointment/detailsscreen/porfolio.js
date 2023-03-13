import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {Getuid} from '../Redux/Uid';
import {Getid} from '../Redux/Uid';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {styles} from '../../style/style';

import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';

const Portfolio = ({route}) => {
  const product = useSelector(e => e.ProductReducer);
  const navigation = useNavigation();
  const [float, setFloat] = useState();
  const [portfolio, setPortfolio] = useState();
  const id = route.params;

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
      `https://saloon123.pythonanywhere.com/Api/Portfolio_Data?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
        setPortfolio(result.Saloon_data);
      })
      .catch(err => console.log(err));
  }, [product.uid]);

  return (
    <View>
      <View style={{flexDirection: 'row', padding: 5, margin: 5}}>
        <TouchableOpacity onPress={() => navigation.navigate('Bookingpage')}>
          <Icon
            style={{padding: 2, margin: 5}}
            name="arrow-left"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{padding: 2, margin: 5, fontSize: 16, color: 'black'}}>
          {product.saloonname}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          borderBottomWidth: 0.5,
          borderColor: '#7c8389',
          marginBottom: 10,
          justifyContent: 'space-evenly',
        }}>
        {float?.Saloon_data?.map((e, i) => {
          return (
            <View key={i}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => navigation.navigate(e.section_name, i)}>
                  <Text
                    style={
                      id == i
                        ? {
                            color: 'black',
                            fontWeight: 'bold',
                            width: '100%',
                            fontSize: 12,
                            padding: 5,
                            margin: 5,
                            borderBottomWidth: 1,
                            width: '100%',
                          }
                        : {color: 'black', fontSize: 12, padding: 5, margin: 5}
                    }>
                    {e.section_name}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
        })}
      </View>

      <ScrollView>
      {portfolio?.map((e, i) => {
        return (
          
          <View key={i}>
            <View
              style={{
                padding: 10,
                borderRadius: 25,
                width: '100%',
                height: 250,
              }}>
              <Image
                style={styles.logos2}
                source={{
                  uri: `https://saloon123.pythonanywhere.com/media/${e.image}`,
                }}
              />
              <View style={{position:'absolute', bottom:40, left:10 , backgroundColor:'black', opacity:0.7, width:'100%' ,height:'20%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:5, margin:10}}>
                <Entypo color='white' name='upload' size={20}/>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  
                <Entypo style={{ marginLeft:20}} color='white' name='message' size={18}/>
                <Entypo style={{ marginLeft:35}} color='white' name='heart' size={18}/>
                </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
       
      </ScrollView>
      
    </View>
  );
};

export default Portfolio;
