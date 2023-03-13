import React, {useEffect, useState} from 'react';
import {styles} from '../style/style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useSelector} from 'react-redux';
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { color } from 'react-native-reanimated';

const Reviews = ({route}) => {
  const product = useSelector(e => e.ProductReducer);
  const navigation = useNavigation();
  const [float, setFloat] = useState();
  const id = route.params;
  const [data, setData] = useState([
    {
      service: 'Mens Regular Hair Cut',
      designer: 'Nick Perez',
      date: '7 Jan 2023',
      reviewby: 'Ron',
      Comment:
        'Good location, great atmosphere. Nic is the nam, he did a ell of a job. if youre looking for great gaircut look no futher',
    },
  ]);
  const [modelvisible, setModelvisible] = useState(false);
  const [modelshow, setModelshow] = useState(false);


  const hide = () => {
    if (modelvisible === false) {
      setModelvisible(true);
    } else {
      setModelvisible(false);
    }
  };

  const modal = () => {
    if (!modelshow) {
      setModelshow(true);
    } else {
      setModelshow(false);
    }
  };


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

  return (
    <View style={{flex:1, backgroundColor:'#170800'}}>
    <View>
        <View style={{flexDirection: 'row', padding: 5, margin: 5}}>
        <TouchableOpacity onPress={() => navigation.navigate('Bookingpage')}>
          <Icon
            style={{padding: 2, margin: 5, color:'white'}}
            name="arrow-left"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{padding: 2, margin: 5, fontSize: 16, color: 'white'}}>
          {product.saloonname}
        </Text>
      </View>

      <View
          style={{
            flexDirection: 'row',
            padding: 5,
            borderBottomWidth: 0.5,
            borderColor: 'white',
            marginBottom: 10,
            justifyContent:'space-evenly'
          }}>  
          {float?.Saloon_data?.map((e, i) => {
            return (
              <View key={i}>
                <ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate(e.section_name,i)} >
                <Text style={id == i? {color:'white', fontWeight:'bold', width:'100%', fontSize:12, padding:5, margin:5, borderBottomWidth:1, width:'100%'} : {color:'white', fontSize:12, padding:5, margin:5}}>
                    {e.section_name}
                  </Text>
                </TouchableOpacity>
                </ScrollView>
              </View>
            );
          })}
     </View>


      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 0.5,
            borderColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 25,
              borderColor: 'white',
              borderRightWidth: 0.5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, color: 'white'}}>4.8</Text>
              <Text style={{marginTop: 10, color:'white'}}>/</Text>
              <Text style={{marginTop: 10, color:'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="star" size={15} color="orange" />
            </View>

            <View>
              <Text style={{fontSize: 10, padding: 5, color:'white'}}>
                Based on 150 reviews
              </Text>
            </View>
          </View>

          <View style={{padding: 25}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color:'white'}}>5</Text>
                <Text
                  style={{
                    borderWidth: 0.5,
                    height: 1.5,
                    width: 100,
                    backgroundColor: 'yellow',
                    margin: 10,
                  }}></Text>
                <Text style={{fontSize: 10,color:'white'}}>137</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10,color:'white'}}>4</Text>
                <Text
                  style={{
                    borderWidth: 0.5,
                    height: 1.5,
                    width: 100,
                    backgroundColor: 'yellow',
                    margin: 10,
                  }}></Text>
                <Text style={{fontSize: 10,color:'white'}}>4</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10,color:'white'}}>3</Text>
                <Text
                  style={{
                    borderWidth: 0.5,
                    height: 1.5,
                    width: 100,
                    backgroundColor: 'yellow',
                    margin: 10,
                  }}></Text>
                <Text style={{fontSize: 10, color:'white'}}>2</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 10, color:'white'}}>2</Text>
                <Text
                  style={{
                    borderWidth: 0.5,
                    height: 1.5,
                    width: 100,
                    backgroundColor: 'yellow',
                    margin: 10,
                  }}></Text>
                <Text style={{fontSize: 10, color:'white'}}>0</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color:'white'}}>1</Text>
                <Text
                  style={{
                    borderWidth: 0.5,
                    height: 1.5,
                    width: 100,
                    backgroundColor: 'yellow',
                    margin: 10,
                  }}></Text>
                <Text style={{fontSize: 10, color:'white'}}>7</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{padding: 20}}>
        {data.map((e, i) => {
          return (
            <View key={i}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                </View>
                <TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color:'white'}}>{e.reviewby}</Text>
                    <Text style={{marginRight: 5,color:'white'}}>{e.date}</Text>
                    <MaterialIcons name="verified" size={20} color="#00a2ad" />
                  </View>
                </TouchableOpacity>
                <Text
                  style={
                    modelvisible === true
                      ? {
                          position: 'absolute',
                          display: 'flex',
                          right: 0,
                          top: 30,
                          padding: 5,
                          borderRadius: 5,
                          color: 'black',
                          fontSize: 12,
                          display: 'flex',
                          backgroundColor: 'white',
                          color:'white'
                        }
                      : {
                          position: 'absolute',
                          right: 0,
                          top: 30,
                          padding: 5,
                          borderRadius: 5,
                          color: 'black',
                          fontSize: 12,
                          display: 'flex',
                          backgroundColor: 'white',
                          display: 'none',
                          color:'white'
                        }
                  }>
                  Verify by Booksy
                </Text>
              </View>

              <Text style={{color:'white'}}>{e.service}</Text>
              <Text style={{color:'white'}}>{`by ${e.designer}`}</Text>
              <Text style={{paddingTop: 10, color:'white'}}>{e.Comment}</Text>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', padding: 5}}>
                  <TouchableOpacity onPress={modal}>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.8,
                        shadowRadius: 10.0,
                        elevation: 15,
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 80,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}>
                      <Text>0</Text>
                      <Entypo style={{margin: 5}} name="thumbs-up" size={16} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={modal}>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.8,
                        shadowRadius: 10.0,
                        elevation: 15,
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 80,
                        height: 40,
                        alignItems: 'center',
                        marginLeft: 10,
                        justifyContent: 'space-around',
                      }}>
                      <Text>0</Text>
                      <Entypo
                        style={{margin: 5}}
                        name="thumbs-down"
                        size={20}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', margin: 5}}>
                  <TouchableOpacity onPress={modal}>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.8,
                        shadowRadius: 10.0,
                        elevation: 15,
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 100,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}>
                      <Text>Report</Text>
                      <Icon style={{margin: 5}} name="flag-o" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      <Modal 
      transparent={true} 
      visible={modelshow} 
      animationType="fade"
      style={{flex:1}}
      >
        <TouchableWithoutFeedback style={{backgroundColor:'black'}} onPress={()=>setModelshow(false)}>
          <View style={{height:'100%', width:'100%'}}>
          <View style={{backgroundColor:'#7c8389', position:"absolute", bottom:0, height:200, width:'100%', borderRadius:5}}>
            <Text style={{textAlign:'center', padding:20, fontSize:20, color:'white', fontWeight:'bold'}}>Not signed in</Text>
            <Text style={{textAlign:'center',color:'white'}}>Sign in to Continue</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly', padding:10}}>
              <Text style={{borderWidth:0.5, fontWeight:'bold', color:'white', backgroundColor:"#a58430", padding:20, borderColor:'grey', borderRadius:10,  textAlign:'center' }}>Cancel</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <Text style={{borderWidth:0.5,fontWeight:'bold', color:'white' , backgroundColor:"#a58430", padding:20, paddingLeft:30, paddingRight:30, borderColor:'grey', borderRadius:10, textAlign:'center' }}>OK</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
    </View>
    
  );
};

export default Reviews;
