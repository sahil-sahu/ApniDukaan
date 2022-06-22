import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Header(){

    const [typeOrder, setType] = useState('takeaway');

    return(
        <View style={styles.header}>
            <View style={styles.topbar}>
                <View style={styles.heading}>
                    <Text style={styles.store}>
                        Mahaveer Store
                    </Text>
                    <Text style={styles.address}>
                        Dumduma 3rd phase market
                    </Text>
                </View>
                <View style={styles.avatarContainer}>
                     <Image style={styles.avatar} source={require('../assets/avatar.png')} />
                </View>
            </View>
            <View  style={styles.searchBar}>
                <AntDesign style={styles.icon} name="search1" size={24} color="#FFC886" />
                <TextInput style={styles.searchBox} placeholder={`Store name or an item`} />
                <MaterialIcons style={styles.icon} name="keyboard-voice" size={24} color="#FFC886" />
            </View>
            <View style={styles.toggle}>
                <Pressable onPress={() => setType('takeaway')} style={[styles.box, typeOrder=='takeaway'? styles.active : null]}>
                    <View>
                        <Text style={[styles.boxText, typeOrder=='takeaway'? styles.activeText : null]}>TAKEAWAY</Text>
                    </View>
                </Pressable>    
                <Pressable onPress={() => setType('delivery')} style={[styles.box, typeOrder=='delivery'? styles.active : null]}>    
                    <View>
                        <Text style={[styles.boxText, typeOrder=='delivery'? styles.activeText : null]}>DELIVERY</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    header:{
        // flex:1
        marginTop: "10%",
        width: "95%",
        // justifyContent: 'center',
        alignSelf:`center`,
    },
    topbar:{
        padding:5,
        paddingVertical:12,
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
    },
    heading:{
        // flex: 9,
    },
    store:{
        color: "#FFC886",
        fontSize:24,
    },
    address:{
        color: "#000",
        fontSize: 12,
    },
    avatarContainer:{
        borderRadius: 100,
        backgroundColor:`#FFC886`,
        padding:5,
    },
    avatar:{
        width:30,
        height:30,
        borderRadius: 60,
    },
    searchBar:{
        borderColor: "#FFC886",
        borderWidth: 2,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent:"space-evenly",
        width:`100%`,
        padding:10,
        overflow:'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10, 
    },
    searchBox:{
        flex:8,
        // paddingHorizontal:8,
        fontSize:18,
        borderRightWidth: 1,
        borderColor:`#C0C0C0`,
    },
    icon:{
        paddingHorizontal:5,
    },
    toggle:{
        borderRadius: 10,
        width:`100%`,
        flexDirection: `row`,
        marginVertical:15,
        backgroundColor:`#EFEFEF`,
    },
    box:{
        overflow:`hidden`,
        width:`50%`,
        height: 50,
        alignItems:`center`,
        justifyContent:`center`,
        borderRadius: 10,
    },
    active:{
        backgroundColor:`#000`,
    },
    boxText:{
        fontSize: 18,
    },
    activeText:{
        color:`#fff`,
    }

})