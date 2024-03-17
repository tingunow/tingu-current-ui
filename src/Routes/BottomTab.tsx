import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, TouchableOpacity, Text, Keyboard} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Message from '../screens/Message/Message';
import Register from '../screens/Register/Register';
import OtpScreen from '../screens/OTP/OtpScreen';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import Account from '../screens/Account/Account';
import Orders from '../screens/Orders/Orders';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name={'Home'}
        options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/Images/homeIcon.png') : require('../assets/Images/homeIcon.png')}
            style={{ width: 25, height: 25,marginTop:10 }}
          />
        ),
        tabBarLabel: ''
      }}
        component={Home}
      />
      <Tab.Screen
        name={'Message'}
        component={Message}
        options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/Images/messageIcon.png') : require('../assets/Images/messageIcon.png')}
            style={{ width: 25, height: 25,marginTop:10 }}
          />
        ),
        tabBarLabel: ''
      }}
      />
      <Tab.Screen
        name={'Search'}
        component={SearchScreen}
        options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/Images/searchIcon.png') : require('../assets/Images/searchIcon.png')}
            style={{ width: 25, height: 25,marginTop:10 }}
          />
        ),
        tabBarLabel: ''
      }}
      />
      <Tab.Screen
        name={'Orders'}
        component={Orders}
        options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/Images/notificationIcon.png') : require('../assets/Images/notificationIcon.png')}
            style={{ width: 25, height: 25,marginTop:10 }}
          />
        ),
        tabBarLabel: ''
      }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Account}
        options={{ headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/Images/profileIcon.png') : require('../assets/Images/profileIcon.png')}
            style={{ width: 25, height: 25,marginTop:10 }}
          />
        ),
        tabBarLabel: '', 
      }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 25,
    height: 25,
  },
});

export default BottomTab;
