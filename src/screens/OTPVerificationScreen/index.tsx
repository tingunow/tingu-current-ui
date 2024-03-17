import {View, Text, Image, SafeAreaView, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import OTPTextView from '../../components/CustomOTPInput';
import CustomNumberPad from '../../components/CustomNumberPad';

const OTPVerificationScreen = (props: any) => {
  // const [selectedType, setSelectedType] = useState('whatsapp');
  const [otpEach, setOtpEach] = useState('');
  const [showNumberPad, setShowNumberPad] = useState(false);
  const OTPMedium = props?.route?.params?.selectedMedium || '';
  const [type, setType] = useState(props?.route?.params?.selectedMedium || '');
  const mobileNumber = props?.route?.params?.mobileNo;
  const phoneCode = props?.route?.params?.phoneCode;
  const [loading, setLoading] = useState(false);
  const [showErrModal, setshowErrModal] = useState(false);
  const [errMessage, setErrMessage] = useState<string>('');
  const [timerValue, setTimerValue] = useState(30);
  const [resendOTPCount, setResendOTPCount] = useState(1);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // const navigationAction = () => {
  //   props.navigation.navigate(PRIVATE_ROUTE.otpVerificationScreen);
  // };

  useEffect(() => {
    console.log('props', props);
  }, [props]);

  useEffect(() => {
    console.log('OTPMedium', OTPMedium);
  }, [OTPMedium]);

  useEffect(() => {
    console.log('type', type);
  }, [type]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerValue > 0) {
        setTimerValue(() => timerValue - 1);
        return;
      }
      clearInterval(interval);
    }, 900);
    return () => {
      clearInterval(interval);
    };
  }, [timerValue]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardListener = (value: boolean) => {
    setShowNumberPad(value);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
      }}>
      {/* <View style={{width: '90%'}}> */}
      <View style={{width: '100%'}}>
        <Text></Text>
        <Text >otp 22222</Text>
        <Text >
         otp3333333
        </Text>

        <View style={{marginTop: '10%', marginBottom: '3.5%'}}>
          <OTPTextView
            // textInputStyle={}
            inputCount={6}
            value={otpEach}
            handleInputChange={(code: string) => setOtpEach(code)}
            secureTextEntry={false}
            disabled={false}
            keyboardVisibilityCallBack={(value: boolean) =>
              keyboardListener(value)
            }
            showCursor={showNumberPad ? true : false}
          />
        </View>
      </View>
    </View>
  );
};

export default OTPVerificationScreen;
