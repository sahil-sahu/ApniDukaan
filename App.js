import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './components/auth/SignInScreen';
import MainScreen from './screens/Main';
const Stack = createNativeStackNavigator();

export default function App() {
   
  const [authState, authChange] = useState(false);

  return (<>
    {(authState? <MainScreen /> : <SignInScreen state={authChange}/>)}
    </>
  )
}

const styles = StyleSheet.create({
  
});
