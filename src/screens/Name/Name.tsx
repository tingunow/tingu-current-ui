import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@hirbod/react-native-otp-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../../assets/Images/Icon_chevron.png';
import Button from '../../components/ButtonComponent/customButton';
import CustomTextInput from '../../components/CustomText/cusstomText';

const Name = ({navigation}) => {
    const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text
        style={styles.heading}>
        How do we call you?
      </Text>
      <Text
        style={styles.subHeading}>
        Please enter your full name. This can be changed.
      </Text>
      <CustomTextInput
        value={name}
        placeholder="Enter your full name"
        onChangeText={(text) => setName(text)}
        style={{marginTop:40}}
      />
      </View>
      <Button
        title="Proceed"
        onPress={() => {navigation.navigate('BottomTab')}}
        style={styles.btnProceed}
        textStyle={{ fontSize: 18 }}
        backgroundColor="#FF4C4C"
        icon={Icon}
        iconPosition="right"
      />
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.btnBack}
        textStyle={{fontSize: 18, color: '#FF4C4C'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',padding:20,height:'100%'
  },
  headingContainer:{
    alignItems:'center',paddingTop:50,marginBottom:50
  },
  subHeading:{
    textAlign: 'center',
          fontWeight: '400',
          fontSize: 13,
          lineHeight: 15.23,
          color: '#000000',
          paddingVertical:20
  },
  heading:{
    textAlign: 'center',
          fontWeight: '600',
          fontSize: 26,
          lineHeight: 28.13,
          color: '#000000',
  },
  btnProceed:{
    marginTop: 30,height:56,width:'100%' 
  },
  btnBack:{
    marginTop: 20, borderWidth: 1, borderColor: '#FF4C4C',width:'100%',height:56
  }
});



export default Name;

