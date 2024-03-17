import { View, Text, SafeAreaView,ScrollView,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Orders() {
  const[selectedItem,setSelectedItem] = useState(null)
  const orderStatus = [
    {
      id:1,
      title:'Not Started'
    },
    {
      id:2,
      title:'Inprogress'
    },
    {
      id:3,
      title:'Completed'
    },
    {
      id:4,
      title:'All'
    },
  ]
  const orderList = [
    {
      id:1,
      title:'Car Driving',
      location:'BTM Layout . 2.0 km',
      image:<Image source={require('../../assets/Images/driving.png')}/>,
      time:'2hrs',
      price:'₹1500',
      startDate:'25 sept, 2023',
      startTime:'4pm',
      acceptance:'Not Accepted',
      status:'Not Started'
    },
    {
      id:2,
      title:'Car Driving',
      location:'BTM Layout . 2.0 km',
      image:<Image source={require('../../assets/Images/driving.png')}/>,
      time:'2hrs',
      price:'₹1500',
      startDate:'25 sept, 2023',
      startTime:'4pm',
      acceptance:'Accepted',
      status:'Not Started'
    },
  ]
  const handleSelectList = (index:any) => {
    setSelectedItem(index)
  }
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{backgroundColor:'#ebeced'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:16,backgroundColor:'white'}}>
      <Text style={{fontSize:18,fontWeight:'700',lineHeight:27}}>Your Orders</Text>
      <Image source={require('../../assets/Images/notificationBell.png')} />
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',paddingHorizontal:16}}>
        {orderStatus.map((item,index)=>{
          return(
            <TouchableOpacity key={index} onPress={()=>handleSelectList(index)} style={{borderColor:'red',borderWidth:1,borderRadius:25,paddingVertical:6,paddingHorizontal:12,backgroundColor:selectedItem === index ? '#FF4C4C' : 'transparent'}}>
              <Text style={{color:selectedItem === index ? 'white' : '#FF4C4C' }}>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={{backgroundColor:'white',padding:15}}>
      {selectedItem !== null && (
        <Text>{`${orderStatus[selectedItem].title} Orders: 2`}</Text>
      )}
      </View>
      {orderList.map((item)=>{
        return(
          <View style={{marginVertical:8,marginHorizontal:10,backgroundColor:'white',borderRadius:10}}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:16}}>
        <View>
          <Image style={{height:120,width:110}} source={require('../../assets/Images/driving.png')} />
        </View>
        <View>
          <Text style={{fontSize:18,fontWeight:'400'}}>{item.title}</Text>
          <Text>{item.location}</Text>
          <Text>Duration: {item.time}</Text>
        </View>
        <View>
          <Text>{item.price}</Text>
        </View>
      </View>
      <View style={{borderTopColor:'grey',borderTopWidth:1}} />
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text>Start date{item.startDate}</Text>
        <Text>Start time{item.startTime}</Text>
      </View>
      <View style={{borderTopColor:'grey',borderTopWidth:1}} />
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
        <Text>{item.acceptance}</Text>
        <View style={{borderWidth:1,borderRadius:10,borderColor:'grey',paddingVertical:5,paddingHorizontal:10}}>
        <Text>{item.status}</Text>
        </View>
      </View>
      </View>
        )
      })}
      
      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}