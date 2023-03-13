// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottomnavigator from './bottomnavigation';
import Payment from '../pages/auth/payment';
import Specialofferpage from '../pages/product/Specialofferpage';
import Loginpage from '../pages/auth/Loginpage';
import Signup from '../pages/auth/Signup';
import Home from '../Home';
import Mapping from '../pages/Component/map.js';
import Datepicker from '../pages/Component/datepicker';
import Dashboard from '../pages/auth/dashboard';
import Verification from '../pages/auth/otp';
import NotuserProfile from '../pages/auth/notuserprofile';
import Bookingpage from '../pages/appointment/bookingpage';
import Reviews from '../pages/appointment/detailsscreen/review';
import Portfolio from '../pages/appointment/detailsscreen/porfolio';
import Giftcard from '../pages/appointment/detailsscreen/giftcard';
// import Saloondetail from '../pages/appointment/detailsscreen/saloondetail';
import Detailss from '../pages/appointment/detailsscreen/detail';
import Bookingproceed from '../pages/bookingproceed/bookigproceed';
import Serviceadd from '../pages/bookingproceed/addproduct';
import Paypalview from '../pages/auth/webview';
import ProductWebview from '../pages/auth/popularweb';



const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Bottomnavigator"
          component={Bottomnavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Specialofferpage"
          component={Specialofferpage}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="ProductWebview"
          component={ProductWebview}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Loginpage"
          component={Loginpage}
        />
        
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Paypalview"
          component={Paypalview}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Mapping"
          component={Mapping}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Datepicker"
          component={Datepicker}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={Dashboard}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Verification"
          component={Verification}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NotuserProfile"
          component={NotuserProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Bookingpage"
          component={Bookingpage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PORFOLIO"
          component={Portfolio}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="GIFT CARDS"
          component={Giftcard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="REVIEWS"
          component={Reviews}
        />
        <Stack.Screen 
        options={{ headerShown: false }}  
        name="DETAILS" 
        component={Detailss}/>  

        <Stack.Screen
          options={{headerShown: false}}
          name="Bookingproceed"
          component={Bookingproceed}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Serviceadd"
          component={Serviceadd}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
