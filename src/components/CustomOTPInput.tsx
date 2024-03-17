import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, TextInput, View, Text } from 'react-native';

// import {wp} from '../utils/Responsive';
// import Colors from '../commonStyle/Colors';
// import EyeIcon from '../assets/icons/eye.png';
// import EyeSlashIcon from '../assets/icons/eye-slash.png';

const OTPTextView = (props: {
  inputCount: number;
  defaultValue?: any;
  value: string;
  handleInputChange?: any;
  disabled?: boolean;
  textInputStyle?: any;
  secureTextEntry: boolean;
  keyboardVisibilityCallBack?: any;
  showCursor?: boolean;
  needRightSpacing?: boolean;
  inputRef?: any;
  disableKeyboardDismiss?: boolean;
  onKeyPress?: any;
  fillBox?: boolean;
  isPin?: boolean;
}) => {
  const { disableKeyboardDismiss = false, onKeyPress } = props;
  const [inputValue, setInputValue] = useState(props.value || '');
  const [focusedInput, setFocusedInput] = useState(0);

  const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevInputValue: any = usePrevious(inputValue);

  const otpCount = [...Array(props.inputCount)];

  const keyBoardDismiss = () => {
    if (!disableKeyboardDismiss) {
      Keyboard.dismiss();
    }
  };

  useEffect(() => {
    setInputValue(props.value);
    if (
      prevInputValue &&
      prevInputValue?.length === props.inputCount &&
      props.value === ''
    ) {
      setFocusedInput(0);
    } else {
      setFocusedInput(props.value?.length);
    }

    if (props.inputCount === props.value.length) {
      props.keyboardVisibilityCallBack &&
        props.keyboardVisibilityCallBack(false);
    }
  }, [props.value]);

  const onInputFocus = (code: any) => {
    const { inputCount } = props;

    if (!props.disabled && code && code.length === inputCount) {
      setFocusedInput(inputCount - 1);
    } else {
      setFocusedInput(code.length);
    }
  };

  const onChangeTextAction = (value: string) => {
    setFocusedInput(value.length);
    props.handleInputChange(value);
    console.log('valuelength: ' + Number(value));
  };

  useEffect(() => {
    {
      props.showCursor && Keyboard?.isVisible?.();
    }
  }, [props.showCursor]);
  const checkFill = (fillInput: boolean) => {
    if (props?.fillBox) {
      return {
        backgroundColor: fillInput ? 'blue' : 'grey',
        width: fillInput ? 5.2 : 5,
        height: fillInput ? 5.2 : 5,
        borderColor: fillInput ? 'blue' : '#c2c0c9',
        borderWidth: fillInput ? 0 : 0.6,
        borderRadius: 2,
      };
    }
    return {};
  };
  return (
    <View style={styles.otpContainer}>
      <TextInput
        value={props.value}
        ref={props?.inputRef}
        onChangeText={text => {
          onChangeTextAction(text);
          if (props.inputCount === text.length) {
            keyBoardDismiss();
          }
        }}
        onKeyPress={onKeyPress}
        style={styles.inputStyle}
        maxLength={props.inputCount}
        keyboardType={'number-pad'}
        // onBlur={() => setFocusedInput(-1)}
        caretHidden={true}
        onFocus={() => {
          onInputFocus(inputValue);
          props.keyboardVisibilityCallBack &&
            props.keyboardVisibilityCallBack(true);
          // Keyboard.dismiss();
        }}
        onSubmitEditing={() => {
          keyBoardDismiss();
          props.keyboardVisibilityCallBack &&
            props.keyboardVisibilityCallBack(false);
        }}
        textContentType={'oneTimeCode'}
        returnKeyType="done"
        editable={!props?.disabled}
      />
      {otpCount.map((item, index) => {
        return (
          <View
            style={[
              props.isPin ? styles.wrapper : styles.pinWrapper,
              props.textInputStyle,
              {
                marginLeft:
                  index === 0
                    ? 0
                    : props.fillBox
                      ? 10
                      : props.needRightSpacing
                        ? 6
                        : 0,
                ...checkFill(
                  inputValue && inputValue.length > index ? true : false,
                ),
              },
            ]}
            key={index}>
            {!props?.fillBox && (
              <View style={styles.wrapperSubContainer}>
                {props.showCursor && focusedInput === index ? (
                  <View style={styles.cursor} />
                ) : props.secureTextEntry ? (
                  <View
                    style={
                      inputValue?.length > index && props.isPin
                        ? styles.secureView
                        : inputValue?.length > index
                          ? styles.pinSecureView
                          : {}
                    }></View>
                ) : (
                  <Text style={styles.inputText}>
                    {inputValue && inputValue.length > index
                      ? inputValue[index]
                      : ''}
                  </Text>
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    // height: 60,
    height: 60,
    // width: '60%',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 20,
    marginBottom: 10,
  },
  inputStyle: {
    position: 'absolute',
    width: '100%',
    height: 40,
    color: 'transparent',
    zIndex: 9999,
  },
  cursor: {
    height: 20,
    width: 2,
    backgroundColor: '#c2c0c9',
  },
  wrapper: {
    width: 13.5,
    height: 13.5,
    // width: 30,
    // height: 30,
    borderRadius: 8,
    borderColor: '#c2c0c9',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinWrapper: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderColor: '#c2c0c9',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSubContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  secureView: {
    width: 16,
    height: 16,
    // width: ms(16),
    // height: ms(16),
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  pinSecureView: {
    width: 30,
    height: 30,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
});

export default OTPTextView;
