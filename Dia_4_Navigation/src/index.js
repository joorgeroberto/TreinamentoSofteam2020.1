/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  LogBox,
} from 'react-native';
import Routes from './Config/Routes';
import 'react-native-gesture-handler';

LogBox.ignoreLogs(['Warning']);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
