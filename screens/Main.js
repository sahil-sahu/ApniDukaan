import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home';
import ProfileEdit from './NewUser';
import Stock from '../components/Stocks/Stock';
import { NavigationContainer } from '@react-navigation/native';

import React, { useState, useEffect } from 'react';
import { init } from '../utilis/DB';

const Tab = createBottomTabNavigator();

export default MainScreen = () => {

    // useEffect(() => {
    //     init();
    // },[])

    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureDirection:'horizontal',
                    presentation: 'modal',
                    
                }}>
                <Tab.Screen name="Main" component={HomeScreen} />
                <Tab.Screen name="Stock" component={Stock} />
                <Tab.Screen name="Profile" component={ProfileEdit} />
            </Tab.Navigator>
        </NavigationContainer>
        );

};