import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ItemInfo from './itemData/ItemInfo';
import ItemHistory from './itemData/itemHistory';


const Tab = createMaterialTopTabNavigator();

export default ItemDetail = ({ route, navigation }) => {

    const { title, id } = route.params;
    navigation.setOptions({ title: title });

    return(
        <Tab.Navigator>
            <Tab.Screen name="Details" component={ItemInfo} />
            <Tab.Screen name="History" component={ItemHistory} />
        </Tab.Navigator>
    );
    
};