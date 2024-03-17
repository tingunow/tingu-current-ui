import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
// import LayoutStyle from '../commonStyle/LayoutStyle';
import CLEAR_ICON from '../assets/Images/eye_hide.png';

interface Props {
  title?: string;
  value: string;
  handleInputChange: (value: string) => void;
}

const CustomNumberPad = ({title, value, handleInputChange}: Props) => {
  const [numberValue, setNumberValue] = useState(value);
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState<string>();

  console.log(value);

  useEffect(() => {
    setNumberValue(value);
  }, [value]);

  const renderNumberPadItem = (
    item: string,
    centerItem?: boolean,
    isClearImg?: boolean,
  ) => {
    return (
      <View>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor={'blue'}
          onShowUnderlay={() => {
            setActive(true);
            setActiveItem(item);
          }}
          onHideUnderlay={() => {
            setActive(false);
          }}
          style={
            centerItem
              ? styles.touchableContainer
              : styles.touchableContainerMargin
          }
          onPress={() => {
            if (isClearImg) {
              let value: any = numberValue.replace(/.$/, '');
              handleInputChange(value);
              setNumberValue(value);
            } else {
              let value = numberValue;
              value = value + item;
              handleInputChange(value);
              setNumberValue(value);
            }
          }}>
          <View
            style={{
              height: Dimensions.get('screen').width / 5.5,
              width: Dimensions.get('screen').width / 5.5,
              borderWidth: isClearImg ? 0 : 1.5,
              borderColor:
                active && activeItem === item ? 'orange' : '#b6b6b6',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            {isClearImg ? (
              <Image
                source={CLEAR_ICON}
                style={{height: 25, width: 25}}
                resizeMode="contain"
              />
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  color: active && activeItem === item ? '#ffffff' : '#b6b6b6',
                  fontWeight: 'bold',
                }}>
                {item}
              </Text>
            )}
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <View style={styles.topRowContainer}>
        {renderNumberPadItem('1')}
        {renderNumberPadItem('2', true)}
        {renderNumberPadItem('3')}
      </View>
      <View style={styles.topRowContainer}>
        {renderNumberPadItem('4')}
        {renderNumberPadItem('5', true)}
        {renderNumberPadItem('6')}
      </View>
      <View style={styles.topRowContainer}>
        {renderNumberPadItem('7')}
        {renderNumberPadItem('8', true)}
        {renderNumberPadItem('9')}
      </View>
      <View style={styles.topRowContainer}>
        <View style={{width: Dimensions.get('screen').width / 5.5}} />
        {renderNumberPadItem('0', true)}
        {renderNumberPadItem('', false, true)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  touchableContainerMargin: {
    marginBottom: 10,
    marginHorizontal: 0,
    borderRadius: 8,
    overflow: 'hidden',
  },
  topRowContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomNumberPad;
