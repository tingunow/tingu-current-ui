import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Register from '../screens/Register/Register';
import {navigationRef} from './RootNavigator';

const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen
          name={'Register'}
          component={Register}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
