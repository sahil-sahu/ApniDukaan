import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import StockItem from './stockItem';
import ItemDetail from './itemDetail';
import AddItem from './AddItem';
import { AntDesign } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Aloo",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd9vcx1aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abbfd28ba",
      title: "4th Item",
    },
    {
      id: "3ac68afc-c605-48d3fdf-a4f8-fbd91aa97f63",
      title: "5th Item",
    },
    {
      id: "58694789a0f-3da1-471f-bd96-145571e29d72",
      title: "6th",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53cdxfabb28ba",
      title: "7th",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "8th",
    },
    {
      id: "58694a0fdfdfff-3da1-471f-bd96-145571e29d72",
      title: "9th",
    },
  ];

  function StockLayer({ item }){


    return (<StockItem item={item} />)
}  

function ListCompo({ navigation }){

    const nav = navigation;


    return(
        <SafeAreaView style={styles.StockWrapper}>
          <View style={styles.searchBoxContainer}>
            <TextInput placeholder='Search' style={styles.SearchBox}/>
          </View>
          <ScrollView>
            {
              DATA.map(item => {
                return(<StockItem key={item.id} item={item} navigation={nav} />)
              })
            }
            </ScrollView>
        </SafeAreaView>
    );

}

export default Stock = () => {


    return(

        <Stack.Navigator
            screenOptions={{
                gestureDirection:'horizontal',
                presentation: 'modal',
                
            }}
            >
            <Stack.Screen name="listofItems" options={
              ({ navigation }) => ({ 
              title: 'WareHouse',
              headerRight: () => (
                <Pressable android_ripple={{opacity: '.5', borderless: false}} onPress={() => navigation.navigate("AddItem")}>
                  <AntDesign name="plus" size={24} color="black" />
                </Pressable>
                )
            }
            )} component={ListCompo} />
            <Stack.Screen name="AddItem" title="Add New Item" component={AddItem} />
            <Stack.Screen name="DetailedItem" component={ItemDetail} />


        </Stack.Navigator>
    )

};

const styles = StyleSheet.create({

    StockWrapper:{
        flex:1,
        justifyContent:"center",
        marginTop: '10%',
        alignItems:'center',
        // backgroundColor: '#00AA00'
    },
    SearchBox:{
      width:"100%",
      height: 24,
      paddingLeft: 10,
      fontSize:20,
    },
    searchBoxContainer:{
      borderWidth:1,
      borderColor:"#000",
      borderRadius:10,
      justifyContent:'center',
      width:"90%",
      alignItems: 'center',
      marginHorizontal:5,
      height: 50,
    }

})