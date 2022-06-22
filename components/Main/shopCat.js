import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';

export default function ShopCat(props){

    return(
        <Pressable style={styles.Card} android_ripple={{opacity: '.5', borderless: true}}>
            <Image style={styles.storeImg} source={{ uri: props.payload.image }} />
        </Pressable>
    );

};

const styles = StyleSheet.create({

    Card:{
        width: 180,
        height: 150,
        margin:5,
        justifyContent:`space-between`,
        alignItems:`center`,
        borderRadius:15,
        // overflow:'h',

    },
    storeImg:{
        width:180,
        height:160,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    nameContainer:{
        padding:20,
    }

})