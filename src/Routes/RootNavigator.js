import React from 'react';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params, isReplace = false) {
  if (isReplace) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name}],
        params: params,
      }),
    );
  } else {
    navigationRef.current.navigate(name, params);
  }
}
