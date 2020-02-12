/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WebView from './src/Pages/WebView/WebView';
import MainStackScreen from './src/Navigators/AppNavigator';

const RootStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      {/* Il componente StatusBar definisce il tema della statusbar android */}
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen name="WebView" component={WebView} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
