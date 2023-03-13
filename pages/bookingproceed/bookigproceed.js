import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  Button,
  Modal,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../style/style';
import {useDispatch} from 'react-redux';
import {Getstylerid} from '../Redux/stylerid';
import CalendarPicker from 'react-native-calendar-picker';
import {
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import message, {Stylerdetail} from '../Redux/message';
import {Renamestyler} from '../Redux/stylerid';
import {Getmessage} from '../Redux/stylerid';
import {RemoveAll} from '../Redux/bookingdetail';
import {Removeitem} from '../Redux/bookingdetail';
import RadioButtonRN from 'radio-buttons-react-native';

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


const Bookingproceed = () => {
  const product = useSelector(e => e.ProductReducer);
  const user = useSelector(e => e.TokenReducer);
  const navigation = useNavigation();
  const [designerdata, setDesignerdata] = useState();
  const [timing, setTiming] = useState();
  const [isloading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const stylerdetail = useSelector(e => e.styleridReducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [showmodel, setShowmodel] = useState(false);
  const [showmodelsecond, setShowmodelsecond] = useState(false);
  const [customermessage, setCustomermessage] = useState();
  const productdetails = useSelector(e => e.Bookingdetailreducer);
  const token = useSelector(e => e.TokenReducer);
  const [timingg, setTimingg] = useState();
  const [bookingamount, setbookingamount] = useState();
  const [paymode,setPaymode]=useState("")
  const end = timingg;
  const delivery = 100;

  useEffect(() => {
    const TotalAmount = productdetails?.mycart?.reduce((prevVal, currentVal) => {
       return prevVal + currentVal.price * currentVal.quantity;
     }, 0)
     setbookingamount(TotalAmount)
 }, [productdetails]);
 

  const data = [
    {
      label: 'Cash on Delivery',
    },
    {
      label: 'Online Pay',
    },
  ];

  const payment = [
    {
      label: 'Jazz Cash',
    },
    {
      label: 'Easy Paisa',
    },
  ];

  const show = () => {
    if (!showmodel) {
      setShowmodel(true);
    } else {
      setShowmodel(false);
    }
  };

  const showsecondmodel = () => {
    if (!showmodel) {
      setShowmodelsecond(true);
    } else {
      setShowmodelsecond(false);
    }
  };

  useEffect(() => {
    fetch(
      `https://saloon123.pythonanywhere.com/Api/employe_name?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
        setDesignerdata(result);
      })
      .catch(err => console.log(err));
  }, [product.uid]);

  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://saloon123.pythonanywhere.com/Api/employee_timing_slot?uid=${stylerdetail.styleruid}`,
    )
      .then(data => data.json())
      .then(data => {
        setIsloading(false);
        setTiming(data);
      })
      .catch(err => console.log(err));
  }, [stylerdetail.styleruid]);

  return (
    <View style={{backgroundColor: '#170800', flex: 1 , flexDirection:'column'}}>
      <ScrollView>


        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <TouchableWithoutFeedback
            onPress={() => 
              navigation.navigate('Cart')}>
            <AntDesign name="arrowleft" size={25} color="white" />
          </TouchableWithoutFeedback>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              margin: 5,
              fontSize: 18,
            }}>
            Checkout
          </Text>
        </View>

        {/* <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {designerdata?.AnyOne_Employee.map((e, i) => {
              return (
                <View style={{padding: 10, alignItems: 'center'}}>
                  <View
                    style={
                      stylerdetail.stylername == e.employee_name
                        ? {
                            borderWidth: 0.5,
                            height: 80,
                            width: 80,
                            borderColor: '#a58430',
                            borderRadius: 100,
                          }
                        : null
                    }>
                    <View>
                      <TouchableWithoutFeedback
                        onPress={() => dispatch(Getstylerid(e))}>
                        <Image
                          style={{
                            alignItems: 'center',
                            margin: 7,
                            width: 65,
                            height: 65,
                            borderRadius: 100,
                          }}
                          source={{
                            uri: `https://saloon123.pythonanywhere.com/media/${e.employee_image}`,
                          }}
                        />
                      </TouchableWithoutFeedback>
                      <Ionicons
                        name="checkmark-done-circle"
                        color="#a58430"
                        size={15}
                        style={
                          stylerdetail.stylername == e.employee_name
                            ? {
                                position: 'absolute',
                                right: 4,
                                display: 'flex',
                                zIndex: 999,
                                color: '#a58430',
                              }
                            : {
                                position: 'relative',
                                top: 1,
                                left: 20,
                                display: 'none',
                              }
                        }
                      />
                    </View>
                  </View>
                  <Text style={{fontSize: 10, marginTop: 5, color: 'black'}}>
                    {e.employee_name}
                  </Text>
                </View>
              );
            })}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'grey',
                height: 50,
                position: 'relative',
                top: 25,
              }}></View>
            {designerdata?.Empolyee_Name.map((e, i) => {
              return (
                <View style={{padding: 10, alignItems: 'center'}}>
                  <View
                    style={
                      stylerdetail.stylername == e.employee_name
                        ? {
                            borderWidth: 0.5,
                            height: 80,
                            width: 80,
                            borderColor: '#a58430',
                            borderRadius: 100,
                          }
                        : null
                    }>
                    <View>
                      <TouchableWithoutFeedback
                        onPress={() => dispatch(Getstylerid(e))}>
                        <Image
                          style={{
                            alignItems: 'center',
                            margin: 7,
                            width: 65,
                            height: 65,
                            borderRadius: 100,
                          }}
                          source={{
                            uri: `https://saloon123.pythonanywhere.com/media/${e.employee_image}`,
                          }}
                        />
                      </TouchableWithoutFeedback>
                      <Ionicons
                        name="checkmark-done-circle"
                        color="black"
                        size={15}
                        style={
                          stylerdetail.stylername == e.employee_name
                            ? {
                                position: 'absolute',
                                right: 4,
                                display: 'flex',
                                zIndex: 999,
                                color: '#a58430',
                              }
                            : {
                                position: 'relative',
                                top: 1,
                                left: 20,
                                display: 'none',
                              }
                        }
                      />
                    </View>
                  </View>
                  <Text style={{fontSize: 10, marginTop: 5, color: 'black'}}>
                    {e.employee_name}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View> */}

        {/* <View style={{padding: 15, backgroundColor:'white'}}>
          <CalendarPicker
            height={480}
            minDate={new Date()}
            dayShape={'square'}
            selectedDayColor="#a58430"
          />
        </View> */}

        {/* <View>
          {isloading ? (
            <BallIndicator
              size={30}
              color="skyblue"
              style={{paddingTop: 50, paddingBottom: 50}}
            />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                borderColor: 'grey',
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row'}}>
                  {timing?.status == true ? (
                    timing?.Time_slots?.map(item => (
                      <View key={item}>
                        <TouchableWithoutFeedback
                          onPress={() => setTimingg(item)}>
                          <Text
                            style={{
                              margin: 20,
                              borderWidth: 0.5,
                              padding: 15,
                              paddingLeft: 25,
                              paddingRight: 25,
                              borderRadius: 10,
                              borderColor: '#a58430',
                              backgroundColor:'#212121',
                              color:'white'
                            }}>
                            {item}
                          </Text>
                        </TouchableWithoutFeedback>
                      </View>
                    ))
                  ) : (
                    <Text
                      style={{
                        padding: 10,
                        margin: 15,
                        fontSize: 16,
                        color: 'grey',
                      }}>
                      No Employee available in this time slot
                    </Text>
                  )}
                </View>
              </ScrollView>
            </View>
          )}
        </View> */}
        {user.token ? (
          <View>
            <Text style={{color: 'white'}}>"Deliver to: "</Text>
            <Text style={{color: 'white'}}>Address </Text>
            <Text style={{color: 'white'}}>Phone# </Text>
            <TextInput></TextInput>
          </View>
        ) : null}

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            padding: 20,
            color:'white'
          }}>
          Product Detail
        </Text>
        <View>
          {productdetails?.mycart?.map((e,i) => {
            return (
              <View
              key={i}
                style={{
                  margin: 25,
                  borderRadius: 5,
                  padding: 15,
                  margin: 15,
                  backgroundColor: '#212121',
                }}>
                <TouchableWithoutFeedback
                  onPress={() => dispatch(Removeitem(e.uid))}>
                  <Entypo
                    style={
                      productdetails.length > 1
                        ? {
                            color: 'orange',
                            position: 'absolute',
                            right: -10,
                            top: -10,
                            display: 'flex',
                          }
                        : {
                            color: 'red',
                            position: 'absolute',
                            right: -10,
                            top: -10,
                            display: 'none',
                          }
                    }
                    name="circle-with-cross"
                    size={25}
                  />
                </TouchableWithoutFeedback>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>{e.name}</Text>
                  <Text
                    style={{fontSize: 18, color: 'white'}}>{`${e.price*e.quantity}`}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingBottom: 25,
                  }}>
                  {/* {timingg?.length > 1 ? (
                    <Text style={{fontSize:18, color:'white'}}>{`${timingg} - ${parseInt(end) + 0.35}`}</Text>
                  ) : (
                    <Text style={{fontSize:15, color:'white'}}>10:00-10.30</Text>
                  )} */}
                  {/* <Text>{`${timingg} - ${parseInt(end)+0.35}`}</Text> */}
                </View>

                {/* <View
                  style={{
                    borderTopWidth: 1,
                    padding: 15,
                    borderColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      alignItems: 'center',
                      margin: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: `https://saloon123.pythonanywhere.com/media/${stylerdetail.stylerimage}`,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{fontSize:15, color:'white'}}>{stylerdetail.stylername}</Text>
                  </View>
                </View> */}
              </View>
            );
          })}
        </View>

        {/* <View style={{marginLeft: 24, marginTop: 20}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Serviceadd')}>
            <Text style={{fontSize: 15, color: '#0096FF'}}>
              <AntDesign name="plus" size={15} /> Add another serivce
            </Text>
          </TouchableWithoutFeedback>
        </View> */}

        {/* <View>
          {customermessage?.length > 1 ? (
            <TouchableWithoutFeedback onPress={() => show()}>
              <Text style={{marginLeft: 24, margin: 10, fontSize: 15}}>
                {customermessage}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <View style={{marginLeft: 24, margin: 10, fontSize: 15}}>
              <TouchableWithoutFeedback onPress={() => show()}>
                <Text style={{fontSize: 15, color: '#c9c9c9'}}>
                  <AntDesign name="message1" size={15} /> Leave a note
                  (optional)
                </Text>
              </TouchableWithoutFeedback>
            </View>
          )}
        </View> */}

        {/* <View style={{marginLeft: 24, margin: 10}}>
          <TouchableWithoutFeedback onPress={() => show()}>
            <Text style={{fontSize: 15, color: '#c9c9c9'}}>
              <AntDesign name="message1" size={15} /> Leave a note (optional)
            </Text>
          </TouchableWithoutFeedback>
        </View> */}

        <Modal transparent={true} visible={showmodel} animationType="fade">
          <TouchableWithoutFeedback onPress={() => setShowmodel(false)}>
            <View style={{height: '100%', width: '100%'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  left: 50,
                  borderRadius: 20,
                  position: 'relative',
                  top: 300,
                  width: '80%',
                  padding: 50,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'center',
                  }}>
                  <AntDesign name="message1" style={{padding: 15}} size={15} />
                  <TextInput
                    onChangeText={e => setCustomermessage(e)}
                    placeholder="Leave a note (optional)">
                    {customermessage}
                  </TextInput>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    paddingTop: 30,
                  }}>
                  <View
                    style={{
                      padding: 20,
                      borderRadius: 5,
                      backgroundColor: '#00a2ad',
                    }}>
                    <Text style={{paddingRight: 10, paddingLeft: 10}}>
                      Cancel
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 20,
                      borderRadius: 5,
                      backgroundColor: '#00a2ad',
                    }}>
                    <TouchableWithoutFeedback
                      onPress={() => setShowmodel(false)}>
                      <Text style={{paddingRight: 25, paddingLeft: 25}}>
                        OK
                      </Text>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          transparent={true}
          visible={showmodelsecond}
          animationType="fade">
          <TouchableWithoutFeedback onPress={() => setShowmodelsecond(false)}>
            <View style={{height: '100%', width: '100%'}}>
              <View
                style={{
                  backgroundColor: '#212121',
                  borderTopEndRadius: 5,
                  borderTopLeftRadius: 5,
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  padding: 50,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    You are not Sign in
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    paddingTop: 30,
                  }}>
                  <View
                    style={{
                      padding: 20,
                      borderRadius: 5,
                      backgroundColor: '#a58430',
                    }}>
                    <Text
                      style={{
                        paddingRight: 25,
                        paddingLeft: 25,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Cancel
                    </Text>
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Loginpage')}>
                    <View
                      style={{
                        padding: 20,
                        borderRadius: 5,
                        backgroundColor: '#a58430',
                      }}>
                      <Text
                        style={{
                          paddingRight: 35,
                          paddingLeft: 35,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        OK
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            padding: 20,
          }}>
          Order Summary
        </Text>
        <View>
          <View style={{
                  margin: 25,
                  borderRadius: 5,
                  padding: 15,
                  margin: 15,
                  backgroundColor: '#212121',
                }}>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{color: 'white', fontSize: 15, padding: 10}}>
              Items Total
            </Text>
            <Text
              style={{
                fontSize: 15,

                padding: 10,
                color: 'white',
              }}>
              {`${bookingamount}`}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{color: 'white', fontSize: 15, padding: 10}}>
              Delivery Fee
            </Text>
            <Text
              style={{
                fontSize: 15,

                padding: 10,
                color: 'white',
              }}>
              100
              {/* {`${bookingamount}`} */}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{color: 'white', fontSize: 15, padding: 10}}>
              Total Payment
            </Text>
            <Text
              style={{
                fontSize: 15,

                padding: 10,
                color: 'white',
              }}>
              {`${bookingamount + delivery}`}
            </Text>
          </View>
          </View>
          <Text style={{color: 'white', padding: 20, fontSize: 20}}>
            Payment Mode
          </Text>
          <View style={{width:'50%', padding:20}}>
          <RadioButtonRN activeColor={'black'}  boxActiveBgColor={'#a58430'} data={data}  selectedBtn={e => setPaymode(e)} />
          </View>
          <View style={{width:'50%', padding:10, paddingLeft:30}}>
          {paymode.label == "Online Pay"? <RadioButtonRN activeColor={'black'}  boxActiveBgColor={'#a58430'} data={payment} selectedBtn={e => console.log(e)} /> : null}
          </View>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 25, padding: 20}}>
              <Text style={{color: 'white', fontSize: 18}}>{`Total Rs${
                bookingamount + delivery
              }`}</Text>
              <Text style={{color: 'white', fontSize: 12}}>
                VAT included where applicable
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() =>
                token.token
                  ? navigation.navigate('Payment', bookingamount)
                  : setShowmodelsecond(true)
              }>
              <Text
                style={{
                  margin: 35,
                  borderRadius: 5,
                  backgroundColor: '#a58430',
                  fontSize: 20,
                  fontWeight: 'bold',
                  padding: 20,
                  color: 'white',
                  textAlign: 'center',
                  width: '30%',
                }}>
                Place Order
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bookingproceed;
