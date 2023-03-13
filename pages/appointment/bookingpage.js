import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../style/style';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Bookingdetailadd} from '../Redux/bookingdetail';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Recommended from '../product/recommended';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import ImageSlider from '../Component/ImageSlider';
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
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';



const Bookingpage = () => {

//   const [card,setCard]=useState([
//     {
//        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//        price: 109.95,
//        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//        category: "men's clothing",
//        images:require('../images/shirt.jpg'),
//        specification:'Brand,Apperal,Age,Range',
//       rating: {
//         rate: 3.9,
//         count: 120
//       }
//     }
   
// ])

//   return (
//     <View style={{flex:1, backgroundColor:'#170800'}}>

//      {card?.map((e,i) =>{
//              return(
           
//                  <View key={i}>
//                   <View>
//                   <Image style={{height:300, width:'100%'}} resizeMode='cover' source={e.images}/>
//                   </View>
                     
//                      <View style={{padding:10}}>
//                      <Text style={{color:'white', margin:5 , fontWeight:'bold'}}>{e.title}</Text>
//                      <Text style={{color:'white',margin:5 , fontWeight:'bold'}}>{e.description}</Text>
//                      <Text style={{color:'white',margin:5 ,fontWeight:'bold' }}>{e.price}</Text>
//                      </View>
//                    <Text style={{color:'white', margin:5 , fontWeight:'bold',padding:10}}>Variation</Text> 
//                    <Text style={{color:'white', margin:5 , fontWeight:'bold',padding:10}}>{e.specification}</Text>     
//                  </View>
                 
//              )
//          })}
         
//          <View style={{flexDirection:'row', justifyContent:'center'}}>
//          <Text style={{color:'white',fontWeight:'bold', padding:20, margin:10, backgroundColor:'#a58430', borderRadius:10}}>Buy Now</Text>
//          <Text style={{color:'white' , fontWeight:'bold', padding:20, margin:10, backgroundColor:'#a58430', borderRadius:10}}>Add to card</Text>
//          </View>
        

//          <Recommended />
//     </View>
//   )
  const product = useSelector(e => e.ProductReducer);
  const dimension = Dimensions.get('screen');
  const [data, setData] = useState();
  const [heart, setHeart] = useState(false);
  const [float, setFloat] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const HeartColor = () => {
    if (heart == false) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  };

  useEffect(() => {
    HeartColor;
  }, []);

  useEffect(() => {
    setIsloading(true)
    fetch(
      `https://saloon123.pythonanywhere.com/Api/Salon_Sub_detail?uid=${product.uid}`,
    )
      .then(data => data.json())
      .then(result => {
        console.log(result)
        setData(result);
        setIsloading(false)
      })
      .catch(err => console.log(err));
  }, [product.uid]);
  

  // useEffect(() => {
  //   fetch(
  //     `https://saloon123.pythonanywhere.com/Api/float_list_data?uid=${product.uid}`,
  //   )
  //     .then(data => data.json())
  //     .then(result => {
  //       setFloat(result);
  //     })
  //     .catch(err => console.log(err));
  // }, [product.uid]);

  // const scrollY = new Animated.Value(0);
  
  const [fontSizes, setFontSizes] = useState(19);
  const [opacityy, setOpacityy] = useState(1);

  // const scrollViewRef = useRef(null);
  // const fixY = 310; // the y-coordinate to fix the screen on

  // const handleScroll = event => {
  //   const scrollY = event.nativeEvent.contentOffset.y;
  //   setFontSizes(20 + (scrollY / 200) * (15 - 16));
  //   setOpacityy(1 + (scrollY / 150) * (0.5 - 1));
  // };

  // const handleOnScroll = (event) => {
  //   const { y } = event.nativeEvent.contentOffset;
  //   if (y >= fixY) {
  //     scrollViewRef.current.scrollTo({ x: 0, y: fixY, animated: true });
  //   }
  // };

  return (


  
    <View style={{backgroundColor:'#170800', flex:1}}>
    <ScrollView
    //  onScroll={handleScroll}
     >
      
      <View>
        {/* <Animated.View style={{opacity: opacityy}}>
          <ImageSlider /> 
        </Animated.View> */}

        <View style={{padding: 5, margin: 5}}>
          <Animated.View style={{opacity: opacityy}}>
            {/* <View style={{flexDirection: 'row', margin: 2}}>
              <Icon name="thumbs-o-up" size={15} color='white' />
              <Text style={{marginLeft: 5, fontSize:10, color:'white'}}>Booksy recommended</Text>
            </View> */}
          </Animated.View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 2,
            }}>
            {/* <ScrollView> */}
              <Animated.Text
                style={{
                  fontWeight: '700',
                  color: 'white',
                  fontSize: fontSizes,
                }}>
                {product.saloonname}
              </Animated.Text>
            {/* </ScrollView> */}
            <TouchableOpacity onPress={HeartColor}>
              <Icon
                name="heart"
                color={heart == true ? 'white' : 'red'}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize:13, color:'white'}}>{product.address}</Text>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            padding: 5,
            borderBottomWidth: 0.5,
            borderTopWidth:0.5,
           
            borderColor: '#7c8389',
            marginBottom: 10,
            justifyContent:'space-evenly',
            backgroundColor:"#212121"
           
          }}> 
          
           {float?.Saloon_data?.map((e, i) => {
            return (
              
              <View key={i}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(e.section_name, i)}>   
                  <Text style={{color: 'white', fontSize: 10, padding: 10, fontWeight:'bold'}}>
                    {e.section_name}
                  </Text>
                </TouchableOpacity>
              </View>
              
            );
          })} 
          
        </View> */}
        
        {/* <View   style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row', borderWidth:1, width:300, borderColor:'#7c8389', height:31, margin:5, borderRadius:10}}> 
        <Ionicons style={{padding:10}} name='search' color='#7c8389' size={10} />
          <TextInput style={{fontSize:10, padding:5}} placeholder="Search your service" placeholderTextColor="#7c8389" />
        </View>
        </View> */}

         <View>
         {isloading? <SkypeIndicator  size={60} style={{paddingTop:200}} color='skyblue' /> : data?.data?.map((e, i) => {
          return (
            <Collapse key={i} style={{margin: 5, padding:5}} isExpanded={true}>
              <CollapseHeader key={i}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.25,
                    borderColor: 'white',
                    
                
                  }}>
                  <Text style={{fontSize: 15, color:'white', textAlign:"center"}}>{e.category_name}</Text>
                  <Icon name="angle-down" color="grey" size={30} />
                </View>
              </CollapseHeader>
              <CollapseBody>
                {e?.Survice_Lists?.map((inner, id) => {
                  return (
                    <View key={id}>
                      <View style={{padding: 10}}>
                        <View style={{backgroundColor:'#212121', width:'100%', height:110, borderRadius:5}}>
                        <View>
                          <Text style={{color: 'white', padding:5, fontSize:20}}>
                            {inner.name}
                          </Text>
                          <View style={{flexDirection:'row', fontSize:15, margin:10}}>
                          <Text
                           style={{color: 'white',fontSize:13}}>{`$${inner.price}`}</Text>
                          <Text
                            style={{color: 'white',  fontSize:13, marginLeft:5}}>
                            {`${inner.before_time}h`}
                          </Text>
                          </View>
                        </View>
                        <Text style={{color:'white', marginLeft:10}}>Popular Services</Text>
                      </View>
                      <View>
                      {/* <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Bookingproceed');
                          dispatch(Bookingdetailadd(inner));
                        }}
                        >
                        <Text
                          style={{
                            backgroundColor: '#a58430',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingRight: 15,
                            paddingLeft: 15,
                            borderRadius: 5,
                            textAlign:'center'
                          }}>
                          Place Order
                        </Text>
                      </TouchableOpacity> */}
                      <TouchableOpacity
                        onPress={() => {Toast.show({
                          type: 'success',
                          text1: 'Product Add to the card',
                        });
                 
                         
                          dispatch(Bookingdetailadd(inner));
                        }}
                        >
                        <Text
                          style={{
                            backgroundColor: '#a58430',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingRight: 15,
                            paddingLeft: 15,
                            borderRadius: 5,
                            textAlign:'center'
                          }}>
                          Add to Cart
                        </Text>
                      </TouchableOpacity>
                      </View>
                     
                      
                    </View>
                    </View>
                  );
                })}
              </CollapseBody>
            </Collapse>
          );
        })}
         </View> 
      </View>
    </ScrollView>
    </View>
  );
};

export default Bookingpage;
