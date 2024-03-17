// src/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import ButtonComp from '../../components/ButtonComponent/customButton';
import Button from '../../components/ButtonComponent/customButton';
import Icon from '../../assets/Images/Icon_chevron.png'

const Login: React.FC = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate()
  };
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#007AFF'); // For Android

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number / Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Onboarding')} style={{display:'flex',flexDirection:'row'}} >
        
        <Text style={styles.forget}>Forget your password?</Text>
        <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
        {/* <ButtonComp
        title="Proceed"
        onPress={handleLogin}
        style={{ margin: 10 }} // Customize button style
        textStyle={{ fontSize: 18 }} // Customize text style
      />
        <ButtonComp
        title="Register"
        onPress={handleLogin}
        style={{ margin: 10 }} // Customize button style
        textStyle={{ fontSize: 18 }} // Customize text style
      /> */}
      {/* <Button
        title="Login"
        onPress={handleLogin}
        style={{ margin: 10 }}
        textStyle={{ fontSize: 18 }}
        backgroundColor="blue"
      /> */}
     
      {/* <Button
        title="Button with Icon"
        onPress={() => {}}
        style={{ margin: 10 }}
        textStyle={{ fontSize: 18 }}
        backgroundColor="orange"
        icon={Icon}
        iconPosition="left"
      /> */}
      <Button
        title="Proceed"
        onPress={() => {navigation.navigate('OTP')}}
        style={styles.proceed}
        textStyle={{ fontSize: 18 }}
        backgroundColor="#FF4C4C"
        icon={Icon}
        iconPosition="right"
      />
       <Button
        title="Register"
        onPress={() => {navigation.navigate('Register')}}
        style={styles.register}
        textStyle={{ fontSize: 18,color:'#FF4C4C' }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingHorizontal:20
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    color:'black',
    fontWeight:'500'
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop:25,
    padding: 10,
    backgroundColor:'#F3F3F3',
    borderRadius:6,
  },
  forget:{
    color:'black'
  },
  reset:{
    color:'#FF4C4C',paddingLeft:5,textDecorationLine:'underline'
  },
  proceed:{
    marginTop: 30,height:56 
  },
  register:{
    marginTop: 20,borderWidth:1,borderColor:'#FF4C4C',height:56 
  }
});

export default Login;
