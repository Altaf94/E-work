import React, {useEffect, useState, useRef} from 'react';
import {styles} from '../style/style';
import {useSelector} from 'react-redux';
import {Getuid} from '../Redux/Uid';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Getproduct} from '../Redux/product';
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
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';

const Explore = () => {
  const [isloading, setIsloading] = useState(false);
  const [result, setResult] = useState('');
  const [servicename, setServicename] = useState('');
  const dispatch = useDispatch();
  const [filter, SetFiler] = useState('');
  const [filterProduct, setfilterProduct] = useState('');

  const uid = useSelector(e => e.UidReducer);
  console.log(uid)
  const Servicename = uid.servicename;
  // const id =uid.id
  const navigation = useNavigation();

  // const flatListRef = useRef(null);

  // const scrollToIndex = (index) => {
  //   if (index < 0 || index >= servicename.length) {
  //     return;
  //   }
  //   flatListRef.current.scrollToIndex({ index, animated: true });
  // };

  // useEffect(() => {
  //   if (!isNaN(uid.id)) {
  //     scrollToIndex(uid.id);
  //   }
  // }, [uid.id]);

  useEffect(() => {
    setIsloading(true);
    fetch('https://saloon123.pythonanywhere.com/Api/Showsaloon')
      .then(result => result.json())
      .then(data => {
        setServicename(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setIsloading(true);
    setIsloading(true);
    fetch(
      `https://saloon123.pythonanywhere.com/Api/search_saloon?saloon_name=${filter}`,
    )
      .then(result => result.json())
      .then(data => {
        setfilterProduct(data);
        setIsloading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [filter.length]);

  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://saloon123.pythonanywhere.com/Api/dataget_saloon?uid=${uid.uid}`,
    )
      .then(result => result.json())
      .then(data => {
        setIsloading(false);
        setResult(data);
      })
      .catch(err => {
        console.log(err);
        setIsloading(false);
      });
  }, [uid.uid]);

  return (
    <View style={{flex: 1, backgroundColor: '#170800'}}>
      <ScrollView horizontal={false}>
        <View style={styles.ProductHeader}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 25,
            }}>
            <Text style={{fontSize: 20, color: '#a58430'}}>
              🅴🅲🅾🅼🅼🅴🆁🅲🅴 🆆🅾🆁🅻🅳
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#7c8389',
              height: 45,
              margin: 5,
              borderRadius: 10,
            }}>
            <Ionicons
              style={{padding: 5, margin: 10}}
              name="search"
              color="#7c8389"
              size={15}
            />
            <TextInput
              onChangeText={e => SetFiler(e)}
              placeholder="Search your service"
              color="white"
              placeholderTextColor="#7c8389"
            />
          </View>

          {/* <View style={styles.inputs2}>
          <TouchableOpacity onPress={() =>navigation.navigate('Mapping')}>
        <Text style={styles.inputs3}>Where..?</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() =>navigation.navigate('Datepicker')}>
        <Text style={styles.inputs3}>When..?</Text>

        </TouchableOpacity>
        </View> */}

          {/* <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={servicename?.Services} 
        renderItem={({item, index}) =>
        <View style={{ paddingTop:15}}>
        <TouchableOpacity onPress={()=>{dispatch(Getuid(servicename?.Services[index]))}}>
          <View style={{backgroundColor:'#212121', padding:10}}>
          <Text style={item.service_name ==
           Servicename ? {color:'white', fontWeight:'bold',padding:5, borderBottomWidth:2, borderColor:'white', fontSize:15} : {color:'white', fontWeight:'400',padding:5,fontSize:15}}>
          {item.service_name}</Text>
          </View>
         </TouchableOpacity>
         </View>
        }
     
        horizontal = {true}  
        
        /> */}
        </View>

        <View>
          <View style={styles.Specialofferline}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
                marginLeft: 20,
              }}>
              {uid.servicename}
            </Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
            {filter?.length
              ? filterProduct?.data?.map((e, id) => {
                  return (
                    <View
                      style={[styles.scrollpadding, {width: '50%'}]}
                      key={id}>
                      <View
                        style={{
                          backgroundColor: '#212121',
                          padding: 20,
                          borderRadius: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Bookingpage');
                            dispatch(Getproduct(e));
                          }}>
                          <View>
                            <Image
                              style={styles.Scrollingimages2}
                              source={{
                                uri: `https://saloon123.pythonanywhere.com/media/${e.image}`,
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                        {/* <View style={styles.RatingVertical}>
                  <Text style={styles.RatingText}>5.0</Text>
                  <Text style={styles.RatingText}>346 Rating</Text> 
                </View> */}

                        <View>
                          {/* <View style={{flexDirection:'row', margin:5}}>
                     <Entypo name="thumbs-up" size={12} color='white' /> 
                    <Text style={{fontSize:10, color:'white'}}>Booksy recommend</Text>
                  </View> */}

                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: 17,
                              margin: 5,
                            }}>
                            {e.saloon_name}
                          </Text>
                          <Text style={{color: 'white', margin: 5}}>
                            Price : 100
                          </Text>
                          {/* <Text style={{color: 'white', margin: 5}}>
                            {e.address}
                          </Text> */}
                        </View>
                      </View>
                    </View>
                  );
                })
              : result?.data?.map((e, id) => {
                  return (
                    <View
                      style={[styles.scrollpadding, {width: '50%'}]}
                      key={id}>
                      <View
                        style={{
                          backgroundColor: '#212121',
                          padding: 20,
                          borderRadius: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Bookingpage');
                            dispatch(Getproduct(e));
                          }}>
                          <View>
                            <Image
                              style={styles.Scrollingimages2}
                              source={{
                                uri: `https://saloon123.pythonanywhere.com/media/${e.image}`,
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                        {/* <View style={styles.RatingVertical}>
                   <Text style={styles.RatingText}>5.0</Text>
                   <Text style={styles.RatingText}>346 Rating</Text> 
                 </View> */}

                        <View>
                          {/* <View style={{flexDirection:'row', margin:5}}>
                      <Entypo name="thumbs-up" size={12} color='white' /> 
                     <Text style={{fontSize:10, color:'white'}}>Booksy recommend</Text>
                   </View> */}

                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: 17,
                              margin: 5,
                              textAlign:'center',
                              paddingTop:5

                            }}>
                            {e.saloon_name}
                          </Text>
                          <Text style={{color: '#a58430', margin: 5,textAlign:'center'}}>
                            Rs100
                          </Text>
                          {/* <Text style={{color: 'white', margin: 5}}>
                            {e.address}
                          </Text> */}
                        </View>
                      </View>
                    </View>
                  );
                })}
          </View>

          {/* {isloading? <PacmanIndicator style={{paddingTop:150}} color="orange" size={60}/> : result?.data?.map((e,id) => {
           
           return (
              <View style={styles.scrollpadding} key={id}>
                <View style={{backgroundColor:'#212121', padding:20, borderRadius:10}}>
                 <TouchableOpacity onPress={()=>{navigation.navigate('Bookingpage');dispatch(Getproduct(e))}}>
                <View>
                <Image style={styles.Scrollingimages2} source={{uri:`https://saloon123.pythonanywhere.com/media/${e.image}`}}/>
                </View>
                </TouchableOpacity>
                <View style={styles.RatingVertical}>
                  <Text style={styles.RatingText}>5.0</Text>
                  <Text style={styles.RatingText}>346 Rating</Text> 
                </View>
                
                
                <View style={{flexDirection:'row'}}>
                  {e.saloon_image?.map((img,id) =>
                   <Image style={styles.fourimage} key={id} source={{uri:`https://saloon123.pythonanywhere.com/media/${img}`}} />
                 
)}
                </View>
                
                
                <View>
                  <View style={{flexDirection:'row', margin:5}}>
                     <Entypo name="thumbs-up" size={12} color='white' /> 
                    <Text style={{fontSize:10, color:'white'}}>Booksy recommend</Text>
                  </View>
               
                <Text style={{color:'white', fontWeight:'bold', fontSize:17, margin:5}}>{e.saloon_name}</Text>
                <Text style={{color:'white', margin:5}}>{e.address}</Text>
                </View>
                </View>
                
              </View>
              
              )
              
          })}  */}
        </View>
      </ScrollView>

      {/* <TouchableOpacity onPress={() =>navigation.navigate('Mapping')}>
       <Text style={styles.mapicon}>
       <Ionicons  name="location-sharp" size={30} color="#00a2ad" />
       <View>
       </View>
       <Text style={{color:'black', fontWeight:'bold'}}>Map</Text>
       </Text>
       </TouchableOpacity> */}
    </View>
  );
};

export default Explore;
