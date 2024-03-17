// // src/components/Button.tsx

// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

// interface ButtonProps {
//   title: string;
//   onPress: () => void;
//   style?: StyleProp<ViewStyle>;
//   textStyle?: any;
// }

// const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
//   return (
//     <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
//       <Text style={[styles.text, textStyle]}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue', // Customize the button's style here
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white', // Customize the text style here
//     fontSize: 16,
//   },
// });

// export default Button;






// src/components/Button.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  icon?: number; // Pass the require() path of the icon
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  backgroundColor,
  icon,
  iconPosition = 'left',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}>
      {icon && iconPosition === 'left' && (
        <Image source={icon} style={styles.icon} />
      )}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {icon && iconPosition === 'right' && (
        <Image source={icon} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width:'100%',
    justifyContent:'center'
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign:'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});

export default Button;

