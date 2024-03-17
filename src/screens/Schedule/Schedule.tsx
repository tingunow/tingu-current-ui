import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/ButtonComponent/customButton';
import Icon from '../../assets/Images/Icon_chevron.png';
import DateTimePicker from '@react-native-community/datetimepicker';

const Schedule = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = () => {
    const currentDate = date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  return (
    <SafeAreaView style={styles.overallContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: '15%'}}>
          <Image source={require('../../assets/Images/backArrow.png')} />
        </TouchableOpacity>
        <View style={styles.headerTextComp}>
          <View>
            <Text>Schedule</Text>
          </View>
        </View>
      </View>
      <View style={styles.headContainer}>
        <Text style={styles.mainHeadText}>
          Your preferred timeline for the completion of this task?
        </Text>
      </View>
      <View>
        <View
          style={styles.subHeadContainer}>
          <View
            style={styles.line}
          />
          <Text
            style={styles.initialText}>
            Starting
          </Text>
          <View
            style={styles.line}
          />
        </View>
        <View style={styles.scheduleContainer}>
        <View
          style={styles.startHeading}>
            <View>
            <Text>Start Date</Text>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date" // 'date' for date-only, 'time' for time-only
                display="default"
                onChange={onChange}
              />
            )}
            </View>
            <TouchableOpacity onPress={showDatepicker}>
            <Image style={{height:20,width:20}} source={require('../../assets/Images/edit.png')} />
            </TouchableOpacity>
        
          
        </View>
        <View
          style={styles.startHeading}>
            <View>
            <Text style={{color:'#FF4C4C'}}>Start Time</Text>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="time" // 'date' for date-only, 'time' for time-only
                display="default"
                onChange={onChange}
              />
            )}
            </View>
            <TouchableOpacity onPress={showDatepicker}>
            <Image style={{height:20,width:20}} source={require('../../assets/Images/edit.png')} />
            </TouchableOpacity>
        
          
        </View>

        </View>
        
        <View style={{display:'flex',flexDirection:'row',marginHorizontal:20}}>
          <View style={styles.line} />
          <Text style={styles.initialText}>Completion</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.scheduleContainer}>
        <View
          style={styles.startHeading}>
            <View>
            <Text>Start Date</Text>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date" // 'date' for date-only, 'time' for time-only
                display="default"
                onChange={onChange}
              />
            )}
            </View>
            <TouchableOpacity onPress={showDatepicker}>
            <Image style={{height:20,width:20}} source={require('../../assets/Images/edit.png')} />
            </TouchableOpacity>
        
          
        </View>
        <View
          style={styles.startHeading}>
            <View>
            <Text style={{color:'#FF4C4C'}}>Start Time</Text>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="time" // 'date' for date-only, 'time' for time-only
                display="default"
                onChange={onChange}
              />
            )}
            </View>
            <TouchableOpacity onPress={showDatepicker}>
            <Image style={{height:20,width:20}} source={require('../../assets/Images/edit.png')} />
            </TouchableOpacity>
        
          
        </View>

        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Image source={require('../../assets/Images/redDot.png')} />
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: '400', paddingLeft: 5}}>
              Tip: Decide the timeline after discussing thoroughly with the
              hero.
            </Text>
          </View>
        </View>
        <Button
          title="Continue"
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
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  overallContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    borderRadius: 4,
    borderBottomColor: '#d9dbda',
    borderBottomWidth: 1,
  },
  headerTextComp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingRight: 15,
  },
  headContainer:{
    paddingHorizontal: 10
  },
  subHeadContainer:{
    display: 'flex', flexDirection: 'row', marginHorizontal: 20
  },
  mainHeadText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  line:{
    borderTopWidth:1,
    borderColor:'#CECECE',
    width:'40%',
    alignItems:'center',
    marginTop:8
  },
  initialText:{
    fontSize:14,fontWeight:'400',paddingHorizontal:10
  },
  scheduleContainer:{
    display:'flex',flexDirection:'row',justifyContent:'space-between',marginHorizontal:20
  },
  startHeading:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#caccca'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
