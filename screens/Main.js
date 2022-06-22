import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home';
import ProfileEdit from './NewUser';
import Stock from '../components/Stocks/Stock';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

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
                <Tab.Screen name="Main" component={HomeScreen} options={{
                    tabBarIcon : (tabInfo) => {
                        return (
                            <AntDesign name="home" size={24} color={tabInfo.focused ? "#FFC886" : "#CBCBCB"} />
                        );
                    },
                    tabBarActiveTintColor: `#FFC886`,
                    tabBarInactiveTintColor:`#CBCBCB`,
                }}/>
                <Tab.Screen name="Stock" component={Stock} options={{
                    tabBarIcon : (tabInfo) => {
                        return (
                            <AntDesign name="book" size={24} color={tabInfo.focused ? "#FFC886" : "#CBCBCB"} />
                        );
                    },
                    tabBarActiveTintColor: `#FFC886`,
                    tabBarInactiveTintColor:`#CBCBCB`,
                }}/>
                <Tab.Screen name="Profile" component={ProfileEdit} options={{
                    tabBarIcon : (tabInfo) => {
                        return (
                            <AntDesign name="user" size={24} color={tabInfo.focused ? "#FFC886" : "#CBCBCB"} />
                        );
                    },
                    tabBarActiveTintColor: `#FFC886`,
                    tabBarInactiveTintColor:`#CBCBCB`,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
        );

};