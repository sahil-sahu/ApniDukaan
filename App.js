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

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {authState ? 
        <Stack.Screen name="Home" component={MainScreen} />
       : <Stack.Screen name="Auth" component={SignInScreen} initialParams={{ pageChanger: authChange }}
        />}


    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
