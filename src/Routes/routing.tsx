// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import Onboarding from '../screens/Onboarding/Onboarding';

import { Image, SafeAreaView, Text, View } from 'react-native';
import OtpScreen from '../screens/OTP/OtpScreen';
import Name from '../screens/Name/Name';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/Search/SearchScreen';
import About from '../screens/About/About';
import Message from '../screens/Message/Message';
import Notification from '../screens/Orders/Orders';
import Schedule from '../screens/Schedule/Schedule';
import Account from '../screens/Account/Account';
const Stack = createStackNavigator();

const Routing = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  // Simulate an asynchronous task (e.g., loading data, making API requests)
  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000); // Adjust the timeout to your desired splash screen duration
  }, []);

  

  return (
  

    <NavigationContainer>
      <Stack.Navigator >
        
        {isAppReady ? (
          <>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
          <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
          <Stack.Screen options={{ headerShown: false }} name="OTP" component={OtpScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Name" component={Name} />
          <Stack.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
          <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
          <Stack.Screen options={{ headerShown: false }} name="Message" component={Message} />
          <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
          <Stack.Screen options={{ headerShown: false }} name="Account" component={Account} />
          <Stack.Screen options={{ headerShown: false }} name="Schedule" component={Schedule} />
          </>
        ) : (
          <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default Routing;
