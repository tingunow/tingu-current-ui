import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/ButtonComponent/customButton';

const Onboarding = ({navigation}) => {
  const slides = [
    {
      id:1,
      title:'Get things done with tingu',
      description:'Find people quickly on tingu for all your tasks and projects.',
      imageTop:require('../../assets/Images/onboarding1.png'),
      imageBottom:require('../../assets/Images/left-shade.png'),
      isButtonVisible:false
    },
    {
      id:2,
      title:'Quick, Easy and Convinent',
      description:'Get the Help You Need in Minutes',
      imageTop:require('../../assets/Images/onboarding2.png'),
      imageBottom:require('../../assets/Images/right-shade.png'),
      isButtonVisible:false
    },
    {
      id:3,
      title:`Let's get started`,
      description:'',
      imageTop:require('../../assets/Images/onboarding3.png'),
      imageBottom:require('../../assets/Images/last-shade.png'),
      isButtonVisible:true
    },
  ]
  const buttonLabel = (label: any) =>{
    return(
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{color:'white',fontSize:18,paddingTop:10}}>{label}</Text>
      </TouchableOpacity>
    )
  }
  return (
      <AppIntroSlider
        data={slides}
        renderItem={({item})=>{
          return(

            <View style={styles.container}>
              <View style={styles.containerHeading}>
                 <Image style={{width:'100%'}} source={item.imageTop} resizeMode='cover' />
              </View>
              <View style={styles.subHeadingContainer}>
              <Image style={{width:'100%'}}
              source={item.imageBottom} resizeMode='stretch'
              />
              <View style={styles.btnContainer}>

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {item.isButtonVisible && (
                <>
                   <Button
                   title="Register"
                   onPress={() => {navigation.navigate('Register')}}
                   style={styles.register}
                   textStyle={{ fontSize: 18,color:'#FBFBFB' }}
                   backgroundColor="#FF4C4C"
                   
                 />
                   <Button
                   title="Login"
                   onPress={() => {navigation.navigate('Login')}}
                   style={styles.login}
                   textStyle={{ fontSize: 18,color:'#FF4C4C' }}
                   backgroundColor="#FBFBFB"
                 />
                  
                 </>
              )}
              </View>
            </View>

            </View>
           
          )
        }}
        showSkipButton
        activeDotStyle={{backgroundColor:'white',width:30}}
        // renderNextButton={()=>buttonLabel("Next")}
        renderNextButton={()=><Image source={require('../../assets/Images/Loader.png')} />}
        renderSkipButton={()=><Text style={{color:'white',fontSize:18,paddingTop:10}}>Skip</Text>}
        // renderSkipButton={()=>buttonLabel("Skip")}
        renderDoneButton={()=>buttonLabel("Done")}
        onDone={()=>{
          navigation.navigate('Login')
        }}
      />
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,paddingBottom:20,backgroundColor:'#FF4C4C'
  },
  containerHeading:{
    flex:0.4,position:'relative'
  },
  subHeadingContainer:{
    flex:2,position:'relative'
  },
  btnContainer:{
    position:'absolute',top:'52%',paddingHorizontal:20,width:'100%'
  },
  title:{
    color:'white',fontSize:32,fontWeight:'600',textAlign:'left'
  },
  description:{
    color:'white',fontSize:18,textAlign:'left',marginTop:20
  },
  register:{
    marginTop: 20,borderWidth:1,borderColor:'#FBFBFB',width:'100%'
  },
  login:{
    marginTop: 30,width:'100%'
  }
})

export default Onboarding