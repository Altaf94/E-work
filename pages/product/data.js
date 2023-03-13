import React, {useState, useEffect} from 'react';
import {styles} from '../style/style';
import {useDispatch} from 'react-redux';
import {Getofferuid} from '../Redux/offerredirect';
import {Getproduct} from '../Redux/product';
import {Getuid} from '../Redux/Uid';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

const Data = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [offer, setOffer] = useState();

  useEffect(() => {
    fetch('https://saloon123.pythonanywhere.com/Api/saloon_packages')
      .then(res => res.json())
      .then(data => {
        setOffer(data.data[1]);
      })
      .catch(err => console.log(err));
  }, []);


  return (

    
    <View style={{backgroundColor: '#170800'}}>
       <Text style={{color:'white', margin:5, fontSize:18, fontWeight:'bold', paddingLeft:20}}>{offer?.heading}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={offer?.saloon_data}
        renderItem={({item, index}) => (
          
          <View key={index} style={{padding: 10, margin: 10}}>
            <TouchableOpacity  onPress={()=>{navigation.navigate('Bookingpage');dispatch(Getproduct(item))}}>
              <View>
                <Image
                  resizeMode="contain"
                  style={styles.Scrollingimages}
                  source={{
                    uri: `https://saloon123.pythonanywhere.com/media/${item.image}`,
                  }}
                />
                <Text style={{color: 'white', padding:5}}>{item.saloon_name}</Text>
                <Text style={{color: 'white',padding:5}}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        horizontal={true}
      />

    </View>
  );
};

export default Data;
