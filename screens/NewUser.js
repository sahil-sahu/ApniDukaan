import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewUser from '../components/auth/SignUp';
import AddPhoto from '../components/auth/AddPhoto';
import AddLocation from '../components/auth/AddLocation';

const Stack = createNativeStackNavigator();

export default ProfileEdit = () => {
   
  return (
    <NavigationContainer independent={true} >
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      gestureDirection:'horizontal',
      presentation: 'modal',
      
    }}>
      <Stack.Screen name="Form1" component={NewUser} />
      <Stack.Screen name="Form2" component={AddPhoto} />
      <Stack.Screen name="Form3" component={AddLocation} />


    </Stack.Navigator>
  </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
  
// });
