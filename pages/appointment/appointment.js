import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../style/style';
import {useDispatch} from 'react-redux';
import {Getstylerid} from '../Redux/stylerid';
import CalendarPicker from 'react-native-calendar-picker';
import message, {Stylerdetail} from '../Redux/message';
import {Renamestyler} from '../Redux/stylerid';
import {Getmessage} from '../Redux/stylerid';
import bookingdetail, {
  Bookingdetailadd,
  RemoveAll,
  Decrement,
} from '../Redux/bookingdetail';
import {Removeitem} from '../Redux/bookingdetail';
import RadioButtonRN from 'radio-buttons-react-native';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  Modal,
  Alert,
} from 'react-native';

const Appointment = () => {
  const product = useSelector(e => e.ProductReducer);

  const user = useSelector(e => e.TokenReducer);
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
  const [paymode, setPaymode] = useState('');
  const end = timingg;
  const delivery = 100;

  console.log(productdetails);

  const navigation = useNavigation();

  useEffect(() => {
    const TotalAmount = productdetails?.mycart?.reduce(
      (prevVal, currentVal) => {
        return prevVal + currentVal.price * currentVal.quantity;
      },
      0,
    );
    setbookingamount(TotalAmount);
  }, [productdetails]);

  return (
    <View style={{backgroundColor: '#170800', flex: 1}}>
      {productdetails?.mycart?.length > 0? (
        <View>
          <View
            style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <TouchableWithoutFeedback onPress={() =>navigation.navigate('Market')}>
              <AntDesign name="arrowleft" size={25} color="white" />
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                margin: 5,
                fontSize: 18,
              }}>
              My Cart
            </Text>
          </View>

          <View>
            {productdetails?.mycart?.map((e, i) => {
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
                        productdetails.mycart.length > 1
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
                  <View>
                    <Text style={{fontSize: 18, color: 'white'}}>{e.name}</Text>
                    <Text style={{fontSize: 12, color: 'white'}}>
                      Brand: 'Texas'{' '}
                    </Text>
                    <Text style={{fontSize: 18, color: 'white'}}>{`Rs ${
                      e.price * e.quantity
                    }`}</Text>
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
                  <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity
                      onPress={() => dispatch(Bookingdetailadd(e))}>
                      <AntDesign
                        style={{margin: 10}}
                        name="plussquare"
                        size={25}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 25, margin: 5}}>
                      {e.quantity}
                    </Text>
                    <TouchableOpacity onPress={() => dispatch(Decrement(e))}>
                      <AntDesign
                        style={{margin: 10}}
                        name="minussquare"
                        size={25}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                margin: 15,
              }}>{`Total Price:${bookingamount}`}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Bookingproceed', bookingamount);
              }}>
              <Text
                style={{
                  backgroundColor: '#a58430',
                  margin: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 15,
                  paddingLeft: 15,
                  borderRadius: 5,
                  textAlign: 'center',
                }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
          <Entypo
            style={{textAlign: 'center', fontWeight: 'bold'}}
            name="shopping-cart"
            color="#a58430"
            size={120}
          />
          <Text
            style={{
              color: '#a58430',
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            No Item in cart
          </Text>
        </View>
      )}
    </View>
  );
};

export default Appointment;
