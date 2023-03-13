import React, { useState, useEffect } from 'react';
import { styles } from '../style/style';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/core';
import {useSelector} from 'react-redux';
import { Getstylerid } from '../Redux/stylerid';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Collapse, CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Bookingdetailadd} from '../Redux/bookingdetail';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';




const Serviceadd = () => {

  const navigation = useNavigation();
  const product = useSelector(e => e.ProductReducer);
  const [data, setData] = useState();
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetch(
      `https://saloon123.pythonanywhere.com/Api/Salon_Sub_detail?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
        setData(result);
      })
      .catch(err => console.log(err));
  }, [product.uid]);

  

  return(
    <View>
      <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <TouchableWithoutFeedback
            onPress={() => 
              navigation.navigate('Bookingproceed')}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableWithoutFeedback>
          <Text style={{fontWeight: 'bold', color: 'black', margin: 5}}>
            Add an another serivce
          </Text>
        </View>

        <View>
         {data?.data?.map((e, i) => {
          return (
            <Collapse style={{margin: 5, padding:5}} isExpanded={true}>
              <CollapseHeader key={i}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.25,
                    borderColor: 'grey',
                
                  }}>
                  <Text style={{fontSize: 15}}>{e.category_name}</Text>
                  <Icon name="angle-down" color="grey" size={30} />
                </View>
              </CollapseHeader>
              <CollapseBody>
                {e?.Survice_Lists?.map((inner, id) => {
                  return (
                    <View key={i}>
                      <View style={{padding: 10}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text style={{color: 'black'}}>
                            {inner.name}
                          </Text>
                          <Text
                            style={{
                              position: 'absolute',
                              right: 60,
                              color: 'black',
                              top:5
                            }}>{`$${inner.price}`}</Text>
                          <Text
                            style={{position: 'absolute', right: 60, top: 20,color: 'black'}}>
                            {`${inner.before_time}h`}
                          </Text>
                        </View>
                        <Text style={{color:'grey'}}>Popular Services</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Bookingproceed');
                          ; dispatch(Bookingdetailadd(inner))
                        }}
                        style={{position: 'absolute', right: 0, top: 15}}>
                        <Text
                          style={{
                            backgroundColor: '#00a2ad',
                            color: 'white',
                            fontWeight: 'bold',

                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingRight: 15,
                            paddingLeft: 15,
                            borderRadius: 5,
                          }}>
                          Add
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </CollapseBody>
            </Collapse>
          );
        })}
         </View>





    </View>
  )
};

export default Serviceadd;
