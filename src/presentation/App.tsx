/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Navigator from './navigator';

export default () => (
  <NativeBaseProvider>
    <Navigator />
  </NativeBaseProvider>
);
