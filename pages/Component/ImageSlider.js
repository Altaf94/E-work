import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { useSelector } from 'react-redux';


import {
  Image,
  View,
  Dimensions,
} from 'react-native';


const ImageSlider = () => {

const dimension = Dimensions.get("screen")
const product = useSelector((e)=>e.ProductReducer)
const img = product.images

const Images = () => {
    return (
      <>
        {img?.map((e,i) => {
          return (
            <View key={i}>
            <View>
              <Image
                source={{uri:`https://saloon123.pythonanywhere.com/media/${e}`}}
                style={{
                  width:dimension.width,
                  height:250,
                  backgroundColor: 'white',
                }}
              />
              </View>
            </View>
          );
        })}
      </>
    );
  };

return (
      <View>
      <FlatListSlider
        data={product?.images}
        // imagekey="index"
        component={<Images/>}
        indicatorActiveWidth={6}
        indicatorStyle={{
          position:'relative',
          top: -40,
          right:-150,
        }}
        indicatorActiveColor= {'white'}
        indicatorInActiveColor={'black'}
        contentContainerStyle={{
          shadowOpacity: 1,
          shadowColor: 'black',
          shadowOpacity: 1,
          shadowOffset: {width: 4, height: 2},
          shadowRadius: 10,
        }}
      />
        </View>
  );
};

export default ImageSlider; 
