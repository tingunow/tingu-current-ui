import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const categoryData = [
    {
      id: '1',
      title: 'Laundry',
      image: <Image source={require('../../assets/Images/laundry.png')} />,
    },
    {
      id: '2',
      title: 'Plumbing',
      image: <Image source={require('../../assets/Images/plumbing.png')} />,
    },
    {
      id: '3',
      title: 'Electrical Work',
      image: <Image source={require('../../assets/Images/electricalWork.png')} />,
    },
    {
      id: '4',
      title: 'House Painting',
      image: <Image source={require('../../assets/Images/painting.png')} />,
    },
    {
      id: '5',
      title: 'Carpentry',
      image: <Image source={require('../../assets/Images/carpentry.png')} />,
    },
    {
      id: '6',
      title: 'Appliance Repair',
      image: <Image source={require('../../assets/Images/repair.png')} />,
    },
    // Add more data items
  ];

  const newlyAddedData = [
    {
      id: '1',
      title: 'House cleaning',
      image: <Image style={{height:140,width:120,borderRadius:8}} source={require('../../assets/Images/houseCleaning.png')} />,
      price: '₹1500',
      rating: '4.8',
      likes:'(1.8k)'
    },
    {
      id: '2',
      title: 'Driving',
      image: <Image style={{height:140,width:120,borderRadius:8}} source={require('../../assets/Images/houseCleaning.png')} />,
      price: '₹1500',
      rating: '4.8',
      likes:'(1.8k)'
    },
    {
      id: '3',
      title: 'Painting',
      image: <Image style={{height:140,width:120,borderRadius:8}} source={require('../../assets/Images/houseCleaning.png')} />,
      price: '₹1500',
      rating: '4.8',
      likes:'(1.8k)'
    },
    {
      id: '4',
      title: 'Carpenting',
      image: <Image style={{height:140,width:120,borderRadius:8}} source={require('../../assets/Images/houseCleaning.png')} />,
      price: '₹1500',
      rating: '4.8',
      likes:'(1.8k)'
    },
    {
      id: '5',
      title: 'Painting',
      image: <Image style={{height:140,width:120,borderRadius:8}} source={require('../../assets/Images/houseCleaning.png')} />,
      price: '₹1500',
      rating: '4.8',
      likes:'(1.8k)'
    },
  ]

  const newlyAddedRenderItem = ({item, index}) => (
   
      <TouchableOpacity
      
      onPress={() => setSelectedCategoryIndex(index)}
    >
      <View style={[
        styles.newlyAddedContainer,
        selectedCategoryIndex === index ? { borderColor: 'red' } : null,
      ]}>
        <View>{item.image}</View>
        <View style={{position:'absolute',bottom:5,borderRadius:8,backgroundColor:'red'}}>
        <Text style={{color:'white',fontSize:18,fontWeight:'600',paddingHorizontal:20,paddingVertical:5}} >{item.price}</Text>
        </View>

      </View>
      <View style={{paddingLeft:5}}>
        <Text style={{fontSize:16,fontWeight:'400',paddingVertical:10}}>{item.title}</Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>   
            <Image style={{height:15, width:15}} source={require('../../assets/Images/star.png')}/>
        <Text style={{paddingLeft:5,paddingRight:10,color:'green',fontWeight:'600',paddingTop:2,fontSize:16}}>{item.rating}</Text>
        <Text style={{paddingTop:2,fontWeight:'600',fontSize:15}}>{item.likes}</Text>

        </View>
      </View>
      
    </TouchableOpacity>

  )

  const renderItem = ({ item, index }) => (
    <View style={{flex:1, padding:8,backgroundColor:'white'}}>
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        selectedCategoryIndex === index ? { borderColor: 'red' } : null,
        
      ]}
      onPress={() => setSelectedCategoryIndex(index)}
    >
      {item.image}
      <Text style={{fontSize:12,paddingTop:10}}>{item.title}</Text>
    </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'white',paddingBottom:10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              padding: 20,
              borderBottomWidth: 5,
              borderBottomColor: '#FBF6F6',
            }}>
            <Image source={require('../../assets/Images/LOGOO.png')} />
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                style={{marginRight: 5}}
                source={require('../../assets/Images/Location.png')}
              />
              <Text>#746 28th B Main Road,..</Text>
            </View>
          </View>
          <View style={{paddingHorizontal:15}}> 
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  lineHeight: 23.44,
                  textAlign: 'center',
                  paddingTop: 40,
                }}>
                What are you looking for?
              </Text>
              <TouchableOpacity
              onPress={()=> navigation.navigate('Search')}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  borderColor: '#454545',
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  height: 40,
                  marginVertical: 30,
                }}>
                <TextInput onPressIn={()=>navigation.navigate('Search')} placeholder="Search for driver,painter..." />
                <Image source={require('../../assets/Images/searchh.png')} />
              </TouchableOpacity>
            </View>
            <View>
            <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 21.09,paddingBottom:20 }}>
              Top Categories
            </Text>
            <FlatList
              data={categoryData}
              numColumns={3} 
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
            <View
              style={{
                backgroundColor: '#D9D9D9',
                height: 120,
                borderRadius: 8,
                justifyContent: 'center',
                marginVertical:20
              }}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                Adds or Offers
              </Text>
            </View>
            <View>
            <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 21.09,paddingBottom:20 }}>
              Newly Added
            </Text>
            <FlatList
              data={newlyAddedData}
              horizontal
              renderItem={newlyAddedRenderItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
              style={{
                backgroundColor: '#D9D9D9',
                height: 120,
                borderRadius: 8,
                justifyContent: 'center',
                marginVertical:20
              }}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                Adds or Offers
              </Text>
            </View>
            <View>
            <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 21.09,paddingBottom:20 }}>
              Most Booked Services
            </Text>
            <FlatList
              data={newlyAddedData}
              horizontal
              renderItem={newlyAddedRenderItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {
    height: 100,
    width: 100,
    // backgroundColor: '#f5f5f5',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#454545',
  },
  newlyAddedContainer: {
    position:'relative',
    height: 140,
    width: 118,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginRight:15
    // borderColor: '#454545',
  },
});

export default Home;
