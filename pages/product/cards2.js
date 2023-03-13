import React, {useState} from 'react';
import {styles} from '../style/style';
import {useNavigation} from '@react-navigation/core';

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
} from 'react-native';

const Cards2 = () => {
  const navigation = useNavigation();

  const [card, setCard] = useState([
    {
      images: require('../images/hh1.png'),
      Title: 'Hair',
    },
    {
      images: require('../images/hh3.jpg'),
      Title: 'Barber',
    },
    {
      images: require('../images/hh2.jpg'),
      Title: 'Nails',
    },
    {
      images: require('../images/hh4.jpg'),
      Title: 'Skin',
    },
    {
      images: require('../images/hh5.jpg'),
      Title: 'Hair Removal',
    },
    {
      images: require('../images/hh6.jpg'),
      Title: 'Lashes & Brows',
    },
  ]);

  return (
    <View style={{backgroundColor: '#170800'}}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          margin: 5,
          paddingLeft: 20,
        }}>
        Popular Categories
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {card.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductWebview')}
                key={i}>
                <View style={styles.scrollpadding2}>
                  <View
                    style={{
                      backgroundColor: '#212121',
                      borderWidth: 1,
                      borderColor: '#a58430',
                      padding: 10,
                      borderRadius: 25,
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      style={styles.CardScrollingimage1}
                      source={e.images}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingTop: 15,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {e.Title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Cards2;
