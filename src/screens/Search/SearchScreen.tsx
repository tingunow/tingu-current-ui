import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const SearchScreen = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const trendingSearches = [
    {
      id: 1,
      image: <Image source={require('../../assets/Images/trading.png')} />,
      title: 'House cleaning',
    },
    {
      id: 2,
      image: <Image source={require('../../assets/Images/trading.png')} />,
      title: 'Driver',
    },
    {
      id: 3,
      image: <Image source={require('../../assets/Images/trading.png')} />,
      title: 'Cook',
    },
    {
      id: 4,
      image: <Image source={require('../../assets/Images/trading.png')} />,
      title: 'House maid',
    },
    {
      id: 5,
      image: <Image source={require('../../assets/Images/trading.png')} />,
      title: 'Gardening',
    },
  ];
  const newlyAddedData = [
    {
      id: '1',
      title: 'House cleaning',
      address: 'BTM Layout 2.0 km',
      image: (
        <Image
          style={{height: 140, width: 120, borderRadius: 8}}
          source={require('../../assets/Images/houseCleaning.png')}
        />
      ),
      price: '₹1500',
      rating: '4.8',
      likes: '(1.8k)',
      heart: <Image source={require('../../assets/Images/heartin.png')} />,
    },
    // {
    //   id: '2',
    //   title: 'Driving',
    //   address: 'BTM Layout 2.0 km',
    //   image: (
    //     <Image
    //       style={{height: 140, width: 120, borderRadius: 8}}
    //       source={require('../../assets/Images/houseCleaning.png')}
    //     />
    //   ),
    //   price: '₹1500',
    //   rating: '4.8',
    //   likes: '(1.8k)',
    //   heart: <Image source={require('../../assets/Images/heartin.png')} />,
    // },
    // {
    //   id: '3',
    //   title: 'Painting',
    //   address: 'BTM Layout 2.0 km',
    //   image: (
    //     <Image
    //       style={{height: 140, width: 120, borderRadius: 8}}
    //       source={require('../../assets/Images/houseCleaning.png')}
    //     />
    //   ),
    //   price: '₹1500',
    //   rating: '4.8',
    //   likes: '(1.8k)',
    //   heart: <Image source={require('../../assets/Images/heartin.png')} />,
    // },
    // {
    //   id: '4',
    //   title: 'Carpenting',
    //   address: 'BTM Layout 2.0 km',
    //   image: (
    //     <Image
    //       style={{height: 140, width: 120, borderRadius: 8}}
    //       source={require('../../assets/Images/houseCleaning.png')}
    //     />
    //   ),
    //   price: '₹1500',
    //   rating: '4.8',
    //   likes: '(1.8k)',
    //   heart: <Image source={require('../../assets/Images/heartin.png')} />,
    // },
    // {
    //   id: '5',
    //   title: 'Painting',
    //   address: 'BTM Layout 2.0 km',
    //   image: (
    //     <Image
    //       style={{height: 140, width: 120, borderRadius: 8}}
    //       source={require('../../assets/Images/houseCleaning.png')}
    //     />
    //   ),
    //   price: '₹1500',
    //   rating: '4.8',
    //   likes: '(1.8k)',
    //   heart: <Image source={require('../../assets/Images/heartin.png')} />,
    // },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/Images/backArrow.png')} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder=""
            />
          </View>
          <View style={styles.mainContainer}>
            <Text>Recents</Text>
            {newlyAddedData.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('About')}
                  style={styles.searchItem}>
                  <View style={[styles.newlyAddedContainer]}>
                    <View>{item.image}</View>
                    <View style={styles.priceContainer}>
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                  </View>
                  <View style={styles.detailsContainer}>
                    <View>
                      <Text style={styles.titleText}>{item.title}</Text>
                      <Text>{item.address}</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                      <Image
                        style={{height: 15, width: 15}}
                        source={require('../../assets/Images/star.png')}
                      />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                      <Text style={styles.ratingLikesText}>{item.likes}</Text>
                    </View>
                  </View>
                  <View style={styles.heartin}>
                    <Image
                      source={require('../../assets/Images/heartin.png')}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.trendingContainer}>
            <View style={{padding: 15}}>
              <Text>Trending searches</Text>
              <View style={styles.trendingItemWrapper}>
                {trendingSearches.map(item => {
                  return (
                    <View style={styles.trendingItemContainer}>
                      <View style={{paddingRight: 5}}>{item.image}</View>
                      <Text>{item.title}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  searchItem: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 5,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  priceText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 20,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  ratingText: {
    paddingLeft: 5,
    paddingRight: 10,
    color: 'green',
    fontWeight: '600',
    paddingTop: 2,
    fontSize: 16,
  },
  ratingLikesText: {
    paddingTop: 2,
    fontWeight: '600',
    fontSize: 15,
  },
  heartin: {
    paddingRight: 10,
    paddingTop: 10,
  },
  trendingContainer: {
    borderTopWidth: 6,
    borderColor: '#D9D9D9',
    marginTop: 25,
  },
  trendingItemWrapper: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
  },
  trendingItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    padding: 6,
    marginTop: 15,
    marginRight: 15,
    borderColor: '#9F9E9E',
  },
  input: {
    width: '100%',
    //   height: 40,
    margin: 12,
  },
  newlyAddedContainer: {
    position: 'relative',
    height: 140,
    width: 118,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 15,
    // borderColor: '#454545',
  },
});

export default SearchScreen;
