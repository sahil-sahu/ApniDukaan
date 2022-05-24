import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Home';
import SignInScreen from './components/auth/SignInScreen';
import NewUser from './components/auth/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
   
  const [authState, authChange] = useState(false);

  return (
    <NewUser />
  );
}

const styles = StyleSheet.create({
  
});
