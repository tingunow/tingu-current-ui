import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, StyleSheet, TextInput, View, Text} from 'react-native';

const CustomOTPTextView = (props: {
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
}) => {
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

  useEffect(() => {
    setInputValue(props.value);
    if (
      prevInputValue &&
      prevInputValue?.length === props.inputCount &&
      props.value === ''
    ) {
      setFocusedInput(0);
      Keyboard.dismiss();
    } else {
      setFocusedInput(props.value?.length);
    }

    if (props.inputCount === props.value.length) {
      props.keyboardVisibilityCallBack &&
        props.keyboardVisibilityCallBack(false);
    }
  }, [props.value]);

  const onInputFocus = (code: any) => {
    const {inputCount} = props;

    if (!props.disabled && code && code.length === inputCount) {
      setFocusedInput(inputCount - 1);
    } else {
      setFocusedInput(code.length);
    }
  };

  const onChangeTextAction = (value: string) => {
    setFocusedInput(value.length);
    props.handleInputChange(value);
  };

  useEffect(() => {
    {
      props.showCursor && Keyboard?.isVisible?.();
    }
  }, [props.showCursor]);

  return (
    <View style={styles.otpContainer}>
      <TextInput
        value={props.value}
        onChangeText={text => {
          onChangeTextAction(text);

          if (props.inputCount === text.length) {
            Keyboard.dismiss();
          }
        }}
        style={styles.inputStyle}
        maxLength={props.inputCount}
        keyboardType={'number-pad'}
        // onBlur={() => setFocusedInput(-1)}
        caretHidden={true}
        onFocus={() => {
          onInputFocus(inputValue);
          setFocusedInput(0);
          props.keyboardVisibilityCallBack &&
            props.keyboardVisibilityCallBack(true);
          // Keyboard.dismiss();
        }}
        onSubmitEditing={() => {
          Keyboard.dismiss();
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
              styles.wrapper,
              props.textInputStyle,
              {marginLeft: props.needRightSpacing ? 6 : 0},
            ]}
            key={index}>
            {props.secureTextEntry ? (
              <View
                style={inputValue?.length > index && styles.secureView}></View>
            ) : (
              <Text style={styles.inputText}>
                {inputValue && inputValue.length > index
                  ? inputValue[index]
                  : ''}
              </Text>
            )}
            {props.showCursor && focusedInput === index && (
              <View style={styles.cursor} />
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between', // to do Kamesh
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
    borderRadius: 8,
    borderColor: '#c2c0c9',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  secureView: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 50,
  },
});

export default CustomOTPTextView;
