// components/TextInput.tsx

import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Image,StyleProp,ViewStyle } from 'react-native';

interface TextInputProps {
  value: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  style,
  secureTextEntry = false,
  onChangeText,
}) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        onChangeText={onChangeText}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={
              isPasswordVisible
                ? require('../../assets/Images/eye_hide.png')
                : require('../../assets/Images/eye_show.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius:6,
    borderColor: '#DDDDE3',
    width:'100%',
    backgroundColor:'#F3F3F3',
    marginBottom:20,
    paddingRight:10
  },
  input: {
    flex: 1,
    height: 45,
    paddingLeft:15
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
});

export default CustomTextInput;
