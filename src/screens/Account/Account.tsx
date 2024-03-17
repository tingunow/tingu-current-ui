import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

export default function Account() {
  const settingDetails = [
    {
      id: 1,
      image: <Image source={require('../../assets/Images/wheelIcon.png')} />,
      title: 'Preferences',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    },
    {
      id: 2,
      image: <Image source={require('../../assets/Images/accountIcon.png')} />,
      title: 'Account',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    }
  ];
  const moreDetails = [
    {
      id: 1,
      image: <Image source={require('../../assets/Images/wheelIcon.png')} />,
      title: 'Help',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    },
    {
      id: 2,
      image: <Image source={require('../../assets/Images/accountIcon.png')} />,
      title: 'Terms of Services',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    },
    {
      id: 3,
      image: <Image source={require('../../assets/Images/accountIcon.png')} />,
      title: 'Share your feedback',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    },
    {
      id: 4,
      image: <Image source={require('../../assets/Images/accountIcon.png')} />,
      title: 'Privacy policy',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    },
    {
      id: 5,
      image: <Image source={require('../../assets/Images/accountIcon.png')} />,
      title: 'Log out',
      rightIcon:<Image source={require('../../assets/Images/rightSideArrow.png')}/>
    }
  ];
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={{backgroundColor:'#d6d2d2'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:15,backgroundColor:'white'}}>
      <Text>Account</Text>
      <Image source={require('../../assets/Images/notificationBell.png')} />
      </View>
      <View style={{backgroundColor:'white',display:'flex',flexDirection:'row',margin:15,borderRadius:6,padding:15,alignItems:'center'}}>
        <View>
        <Image source={require('../../assets/Images/userIcon.png')}/>
        </View>
        <View style={{paddingLeft:10}}>
        <Text>Sharath</Text>
        <Text>Sharath@gmail.com</Text>
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',paddingHorizontal:15,width:'100%',justifyContent:'space-between'}}> 
        <View style={{backgroundColor:'white',borderRadius:8,padding:20,alignItems:'center',justifyContent:'center',width:'48%'}}>
          <Image source={require('../../assets/Images/heartIcon.png')}/>
          <Text style={{color:'#FF4C4C',paddingTop:10}}>Saved lists</Text>
        </View>
        <View style={{backgroundColor:'white',borderRadius:8,padding:20,alignItems:'center',justifyContent:'center',width:'48%'}}>
          <Image source={require('../../assets/Images/shareIcon.png')}/>
          <Text style={{color:'#FF4C4C',paddingTop:10}}>Invite friends</Text>
        </View>
      </View>
      <View style={{backgroundColor:'white',margin:15,borderRadius:6,padding:15}}>
        <Text style={{fontSize:16,color:'#121212',fontWeight:'700',lineHeight:18.75}}>Settings</Text>
        {settingDetails.map((item)=>{
          return(
            <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20}}>
              <View style={{paddingRight:20,paddingTop:20}}>
                {item.image}
              </View>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'85%',borderTopWidth:1,borderColor:'#CECECE',paddingTop:20}}>
                <Text>
                {item.title}
                </Text>
                <View>
                  {item.rightIcon}
                </View>
              </View>
            </View>
          )
        })}
      </View>
      <View style={{backgroundColor:'white',margin:15,borderRadius:6,padding:15,marginBottom:20}}>
        <Text style={{fontSize:16,color:'#121212',fontWeight:'700',lineHeight:18.75}}>More</Text>
        {moreDetails.map((item)=>{
          return(
            <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20}}>
              <View style={{paddingRight:20,paddingTop:20}}>
                {item.image}
              </View>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'85%',borderTopWidth:1,borderColor:'#CECECE',paddingTop:20}}>
                <Text>
                {item.title}
                </Text>
                <View>
                  {item.rightIcon}
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

})