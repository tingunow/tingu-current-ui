// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Home from './src/screens/Home/Home';
import Onboarding from './src/screens/Onboarding/Onboarding';

import { Image, SafeAreaView, Text, View } from 'react-native';
import OtpScreen from './src/screens/OTP/OtpScreen';
import Name from './src/screens/Name/Name';
import OTPVerificationScreen from './src/screens/OTPVerificationScreen';
import Routing from './src/Routes/routing';
const Stack = createStackNavigator();

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  // Simulate an asynchronous task (e.g., loading data, making API requests)
  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000); // Adjust the timeout to your desired splash screen duration
  }, []);

  

  return (
  <>
  <Routing/>
  </>
    
  );
};

export default App;
