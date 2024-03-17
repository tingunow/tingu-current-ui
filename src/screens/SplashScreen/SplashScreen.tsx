import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/Images/Layer_1.png'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4C4C',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default SplashScreen