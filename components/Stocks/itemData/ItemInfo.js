import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';



export default ItemInfo = () => {

    const [Quantity, setQuantity] = useState(['2','3','0']);
    const [inputQuantity, setInputQuantity] = useState('');


    return(
        <View style={styles.newUser}>

            <View style={styles.header}>
                <View style={styles.headerbox}>
                    <Text style={styles.headertxt}>
                        Update Stock : {Quantity}
                    </Text>
                </View>
            </View>
            <View style={styles.name}>
                <View style={styles.label}>
                    <Text style={styles.labeltxt}>
                        Quantity
                    </Text>
                </View>
                <TextInput style={styles.Box} keyboardType={'phone-pad'} 
                    value={inputQuantity} 
                    onChangeText={setInputQuantity}
                    />
            </View>
            <View style={styles.nextButt}>
                <Pressable android_ripple={{opacity: '.5', borderless: true}} onPress={() => {
                    setQuantity(inputQuantity);
                    setInputQuantity(null);
                    }}>
                    <AntDesign name="rightcircleo" size={48} color="#FFC886" />
                </Pressable>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    newUser:{
        backgroundColor:"#fff",
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    logoContainer:{
        width:'75%',
        margin:15,
    },
    logo:{
        width:'100%',
        height:85,
        
    },
    header:{
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
        margin:20,
    },
    headertxt:{
        fontSize:20,
    },
    label:{
        transform:[
            {translateY:-9},
            {translateX:15}
        ],
        width:"25%"
    },
    labeltxt:{

        backgroundColor:"#fff",
        textAlign:'center',

    },
    name:{

        borderColor:'#ababab',
        borderWidth:1,
        width: "80%",
        height: 45,
        borderRadius:5,
        margin:25,

    },
    Box:{
        width:'100%',
        height:'100%',
        padding: 10,
        fontSize:18,
        transform:[{ translateY : -9}]
    },
    mail:{

        borderColor:'#ababab',
        borderWidth:1,
        width: "80%",
        height: 45,
        borderRadius:5,
        margin:25,

    },
    store:{

        borderColor:'#ababab',
        borderWidth:1,
        width: "80%",
        height: 45,
        borderRadius:5,
        margin:25,

    },
    nextButt:{
        marginTop: '5%',
        overflow: 'hidden',
        width:'100%',
        justifyContent:'flex-end',
        flexDirection:'row',
        paddingRight:'20%'
    },
})