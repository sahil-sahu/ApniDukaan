import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';

export default function FeaturedCard(props){

    return(
        <Pressable style={styles.Card} android_ripple={{opacity: '.5', borderless: true}}>
            <Image style={styles.storeImg} source={{ uri: props.payload.image }} />
            <View style={styles.nameContainer}>
                <Text style={styles.StoreName}>{props.payload.name}</Text>
            </View>
        </Pressable>
    );

};

const styles = StyleSheet.create({

    Card:{
        width: 150,
        height: 200,
        borderWidth:2,
        borderColor: "#D9D9D9",
        margin:5,
        justifyContent:`space-between`,
        alignItems:`center`,
        borderRadius:15,
        // overflow:'h',

    },
    storeImg:{
        width:150,
        height:150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    nameContainer:{
        padding:20,
    }

})