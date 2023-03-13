import React, {useState} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './configure/Navigation';
import Store from './pages/Redux/store';
import LandingPage from './pages/landingpage/Landingpage';
import Toast from 'react-native-toast-message';

const App = () => {
  const [issplash, setisSplash] = useState(false);

  setTimeout(() => {
    setisSplash(true);
  }, 2000);


  return (
    <>
      <Provider store={Store}>
        {issplash ? <AppNavigation /> : <LandingPage />}
      </Provider>
      <Toast />
    </>
  );
};

export default App;
