// src/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import ButtonComp from '../../components/ButtonComponent/customButton';
import Button from '../../components/ButtonComponent/customButton';
import Icon from '../../assets/Images/Icon_chevron.png';
import CustomTextInput from '../../components/CustomText/cusstomText';

const Register: React.FC = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('OTP')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please enter your email & phone number</Text>
      <CustomTextInput
        value={email}
        placeholder="Enter email id"
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.phoneContainer}>
         <TextInput
        style={styles.PhoneCodeinput}
        placeholder="+91"
        // value={email}
        // onChangeText={setEmail}
      />
      <TextInput
        style={styles.PhoneNumberinput}
        placeholder="Enter Phone Number"
        // value={email}
        // onChangeText={setEmail}
      />
      </View>
      <CustomTextInput
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <CustomTextInput
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {/* <TextInput
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
      /> */}
     
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
        style={styles.proceedBtn}
        textStyle={{ fontSize: 18 }}
        backgroundColor="#FF4C4C"
        icon={Icon}
        iconPosition="right"
      />
       <View style={styles.loginContainer} >
        <TouchableOpacity>
        <Text style={styles.accountText}>Already have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.loginBtn}>Login here</Text>
        </TouchableOpacity>
       
       
        </View>
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
    fontSize: 28,
    marginBottom: 80,
    color:'#121212',
    width:'100%',
    textAlign:'center'
  },
  phoneContainer:{
    display:'flex',flexDirection:'row',width:'100%',height:40,justifyContent:'space-between',marginBottom:25
  },
  PhoneCodeinput: {
    width: '20%',
    height: 45,
    borderColor: '#DDDDE3',
    borderWidth: 1,
    // marginBottom: 15,
    // marginTop:25,
    padding: 10,
    backgroundColor:'#F3F3F3',
    borderRadius:6,
    textAlign:'center'
  },
  PhoneNumberinput:{
    width:'75%',
    height: 45,
    borderColor: '#DDDDE3',
    borderWidth: 1,
    paddingLeft: 15,
    backgroundColor:'#F3F3F3',
    borderRadius:6,
  },
  proceedBtn:{
    marginTop: 30,height:56
  },
  loginContainer:{
    display:'flex',flexDirection:'row',marginTop:30
  },
  accountText:{
    lineHeight:16.41, fontSize:16, fontWeight:'400',color:'#121212'
  },
  loginBtn:{
    lineHeight:16.41, fontSize:16, fontWeight:'400',color:'#FF4C4C',paddingLeft:5, textDecorationLine:'underline'
  }
});

export default Register;
