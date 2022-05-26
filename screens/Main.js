import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home';
import ProfileEdit from './NewUser';

const Tab = createBottomTabNavigator();

export default MainScreen = () => {

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                gestureDirection:'horizontal',
                presentation: 'modal',
                
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileEdit} />
        </Tab.Navigator>
        );

};