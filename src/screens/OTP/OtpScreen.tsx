import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@hirbod/react-native-otp-input';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/ButtonComponent/customButton';
import CustomOTPTextView from '../../components/CustomOTPTextView';
import OTPTextView from '../../components/CustomOTPInput';

const OtpScreen = ({navigation}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [otpEach, setOtpEach] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Enter your OTP</Text>
        <Text style={styles.subHeading}>
          Please enter the OTP received to the number given.
        </Text>

        {/* <OTPInputView
        style={{width: '80%', height:80}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      /> */}
        <OTPTextView
          // style={{marginRight:10}}
          inputCount={4}
          value={otpEach}
          handleInputChange={(code: string) => setOtpEach(code)}
          secureTextEntry={false}
          disabled={false}
          textInputStyle={{width: 50, height: 60, marginRight: 10}}
          disableKeyboardDismiss={false}
        />
        {/* <TextInput style={{width: 100, backgroundColor: 'red', height: 100}} /> */}
        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendMainText}>Didn't Receive OTP?</Text>
          <Text style={styles.resendSubText}>Resend</Text>
          <Text style={styles.resendMainText}>in 20s</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Name');
        }}
        style={styles.loginBtn}
        textStyle={{fontSize: 18}}
        backgroundColor={isDisabled ? '#9F9E9E' : '#44BF49'}
      />
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.backBtn}
        textStyle={{fontSize: 18, color: '#FF4C4C'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 28.13,
    color: '#000000',
  },
  subHeading: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15.23,
    color: '#000000',
    paddingVertical: 15,
  },
  resendContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 50,
  },
  resendMainText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
  },
  resendSubText: {
    color: '#FF4C4C',
    paddingHorizontal: 5,
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '400',
  },
  loginBtn: {
    marginTop: 30,
    width: '100%',
    height: 56,
  },
  backBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#FF4C4C',
    width: '100%',
    height: 56,
  },
});

export default OtpScreen;
