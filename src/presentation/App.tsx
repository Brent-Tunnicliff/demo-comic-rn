import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Navigator } from './navigator';

export const App = () => (
  <NativeBaseProvider>
    <Navigator />
  </NativeBaseProvider>
);
