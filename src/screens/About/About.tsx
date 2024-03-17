import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/ButtonComponent/customButton';
import Icon from '../../assets/Images/Icon_chevron.png';

const MAX_CHARACTERS = 100;

const About = ({navigation}) => {

  const [profileActive, setProfileActive] = useState(true);
  const [showFullText, setShowFullText] = useState(false);

  
  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };
  const aboutDetails = [
    {
      id: 1,
      image: (
        <Image
          style={{height: 160, width: 120, borderRadius: 8}}
          source={require('../../assets/Images/wallPainting.png')}
        />
      ),
      title: 'House Painting',
      price: '₹1500',
      time: 'Response time:10 mins',
      address: 'BTM Layout 2.0 km',
      star: <Image source={require('../../assets/Images/yellowStar.png')} />,
      rating: '4.8',
      reviews: '(1.8k)',
      duration: '2days',
    },
  ];
  const ratingDetails = [
    {
      id: 1,
      name: 'communication',
      star: (
        <Image
          style={{height: 15, width: 15, marginRight: 2}}
          source={require('../../assets/Images/yellowStar.png')}
        />
      ),
      review: '4.8',
    },
    {
      id: 2,
      name: 'Punctuality',
      star: (
        <Image
          style={{height: 15, width: 15, marginRight: 2}}
          source={require('../../assets/Images/yellowStar.png')}
        />
      ),
      review: '4.8',
    },
    {
      id: 3,
      name: 'Professionalism',
      star: (
        <Image
          style={{height: 15, width: 15, marginRight: 2}}
          source={require('../../assets/Images/yellowStar.png')}
        />
      ),
      review: '4.8',
    },
    {
      id: 4,
      name: 'Quality of Work',
      star: (
        <Image
          style={{height: 15, width: 15, marginRight: 2}}
          source={require('../../assets/Images/yellowStar.png')}
        />
      ),
      review: '4.8',
    },
    {
      id: 5,
      name: 'Skill and Expertise',
      star: (
        <Image
          style={{height: 15, width: 15, marginRight: 2}}
          source={require('../../assets/Images/yellowStar.png')}
        />
      ),
      review: '4.8',
    },
    {
      id: 6,
      name: 'Would recommend',
      star: (
        <Image
          style={{height: 15, width: 15, marginRight: 2}}
          source={require('../../assets/Images/yellowStar.png')}
        />
      ),
      review: '4.8',
    },
  ];
  const reviewDetails = [
    {
      id: 1,
      title: 'Shelly',
      star: <Image source={require('../../assets/Images/yellowStar.png')} />,
      rating: 3.7,
      country: 'India',
      date: '1 week ago',
      reviews:
        'Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis malesuada diam imperdiet dui nunc donec tortor amet ut.',
    },
    {
      id: 2,
      title: 'Shelly',
      star: <Image source={require('../../assets/Images/yellowStar.png')} />,
      rating: 3.7,
      country: 'India',
      date: '1 week ago',
      reviews:
        'Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis malesuada diam imperdiet dui nunc donec tortor amet ut.',
    },
  ];
  const images = [
    require('../../assets/Images/RectangleImage.png'),
    require('../../assets/Images/RectangleImage.png'),
    require('../../assets/Images/RectangleImage.png'),
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{width: '15%'}}>
              <Image source={require('../../assets/Images/backArrow.png')} />
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                justifyContent: 'space-between',
                width: '85%',
                paddingRight: 15,
              }}>
              <View>
                <Text>About service</Text>
              </View>
              <View>
                <Image source={require('../../assets/Images/heartin.png')} />
              </View>
            </View>
          </View>
          <SliderBox
            images={images}
            dotColor="white"
            inactiveDotColor="transparent"
            dotStyle={{
              height: 12,
              width: 12,
              borderRadius: 6,
              borderWidth: 3,
              borderColor: 'white',
            }}
          />
          {/* <View style={{paddingHorizontal:15}}> */}
          <View>
            {aboutDetails.map(item => {
              return (
                <View
                  style={{display: 'flex', flexDirection: 'row', padding: 15}}>
                  <View style={{position: 'relative'}}>
                    <View style={{height: 180}}>{item.image}</View>
                    <View
                      style={{
                        backgroundColor: 'red',
                        padding: 5,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: 0,
                        left: 10,
                      }}>
                      <Text style={{color: 'white'}}>Starting from</Text>
                      <Text style={{color: 'white', fontWeight: '700'}}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                  <View style={{paddingHorizontal: 15}}>
                    <Text style={{fontSize: 18, paddingBottom: 10}}>
                      {item.title}
                    </Text>
                    <Text style={{paddingVertical: 10}}>{item.time}</Text>
                    <Text>{item.address}</Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingVertical: 10,
                      }}>
                      <Text>{item.star}</Text>
                      <Text>{item.rating}</Text>
                      <Text>{item.reviews}</Text>
                    </View>
                    <Text>Duration {item.duration}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              borderBottomColor: '#CECECE',
              borderTopColor: '#CECECE',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              marginHorizontal: 15,
              paddingVertical: 15,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View style={{width: '15%', position: 'relative'}}>
              <Image
                style={{height: 50, width: 50}}
                source={require('../../assets/Images/profileImg.png')}
              />
              {profileActive && (
                <View style={{position: 'absolute', bottom: 0, right: 5}}>
                  <Image
                    source={require('../../assets/Images/activeDot.png')}
                  />
                </View>
              )}
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 10,
              }}>
              <View>
                <Text style={{fontWeight: '600'}}>Suresh</Text>
                <Text style={{color: '#606060', paddingTop: 5}}>Level 2</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'red', paddingRight: 10}}>
                  View Profile
                </Text>
                <Image source={require('../../assets/Images/redArrow.png')} />
              </View>
            </View>
          </View>
          <View style={{padding: 15 }}>
            <View style={{ height: showFullText ? 'auto' : 200, overflow:'hidden'}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              Service description
            </Text>
            <Text style={{paddingVertical: 10}}>
              Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing
              in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis
              malesuada diam imperdiet dui nunc do..Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing
              in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis
              malesuada diam imperdiet dui nunc do..Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu
            </Text>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              Service description
            </Text>
            <Text style={{paddingVertical: 10}}>
              Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing
              in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis
              malesuada diam imperdiet dui nunc do..Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing
              in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis
              malesuada diam imperdiet dui nunc do..Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu
            </Text>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              Availability
            </Text>
            <Text style={{paddingVertical: 10}}>
              Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing
              in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis
              malesuada diam imperdiet dui nunc do..Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu adipiscing
              in sed nisi. Egestas enim ut commodo volutpat nisl tempor. Mattis
              malesuada diam imperdiet dui nunc do..Lorem ipsum dolor sit amet consectetur. Mi arcu ac eu
            </Text>
            </View>
            <TouchableOpacity onPress={toggleReadMore}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#FF4C4C',
                  textAlign: 'right',
                  width: '100%',
                }}>
                {showFullText ?  'Read Less' : 'Read More' }
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              borderBottomColor: 'pink',
              borderBottomWidth: 5,
              borderTopWidth: 5,
              borderTopColor: 'pink',
              paddingVertical: 10,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 22, fontWeight: '600'}}>4.8</Text>
              <Image source={require('../../assets/Images/fullStar.png')} />
              <Text>Average rating based on 1.8k user</Text>
            </View>
            <Text
              style={{paddingVertical: 10, fontSize: 14, fontWeight: '600'}}>
              Rating for this service
            </Text>
            <View>
              {ratingDetails.map(item => {
                return (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 10,
                    }}>
                    <View>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>{item.star}</View>
                      <View>
                        <Text>{item.review}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{padding: 15}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Reviews (23)</Text>
              <TouchableOpacity>
                <Text style={{color: 'red'}}>See All</Text>
              </TouchableOpacity>
            </View>
            {reviewDetails.map(item => {
              return (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    paddingTop: 15,
                  }}>
                  <View style={{width: '20%'}}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: 'grey',
                      }}></View>
                  </View>
                  <View style={{width: '80%'}}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>{item.title}</Text>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View>{item.star}</View>
                        <Text>{item.rating}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingVertical: 8,
                      }}>
                      <Text>{item.country}</Text>
                      <Text style={{paddingLeft: 20}}>{item.date}</Text>
                    </View>
                    <Text>{item.reviews}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.3,
            shadowRadius: 2,
            borderRadius: 4,
            borderTopColor: '#d9dbda',
            borderTopWidth: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../../assets/Images/redDot.png')} />
            <Text>Tip: Chat with the person before placing order</Text>
          </View>
          <Button
            title="Order"
            onPress={() => {
              navigation.navigate('Schedule');
            }}
            style={{marginTop: 30, height: 56}}
            textStyle={{fontSize: 18}}
            backgroundColor="#FF4C4C"
            icon={Icon}
            iconPosition="right"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
