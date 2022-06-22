import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import ShopCat from './shopCat';

export default function ShopBy(){

    const data = [
        {
            name:`Sai Store`,
            image:`https://firebasestorage.googleapis.com/v0/b/apnidukaan-c4acf.appspot.com/o/group.png?alt=media&token=c4c543dd-6018-419f-86d8-d075410e3d68`,
            route: `IDKfghghds`,
        },
        {
            name:`Mahaveer Store`,
            image:`https://firebasestorage.googleapis.com/v0/b/apnidukaan-c4acf.appspot.com/o/group(1).png?alt=media&token=e9d683b0-78ab-4c32-ac1c-ab92e4c3a120`,
            route: `IDKdvnjs`,
        },
        {
            name:`Place2Shop`,
            image:`https://firebasestorage.googleapis.com/v0/b/apnidukaan-c4acf.appspot.com/o/group.png?alt=media&token=c4c543dd-6018-419f-86d8-d075410e3d68`,
            route: `IDKdhgds`,
        },
        {
            name:`7heven`,
            image:`https://firebasestorage.googleapis.com/v0/b/apnidukaan-c4acf.appspot.com/o/group(1).png?alt=media&token=e9d683b0-78ab-4c32-ac1c-ab92e4c3a120`,
            route: `IDKdsffd`,
        },
    ];

    return(
        <View style={styles.ShopBy}>
            <Text style={styles.heading}>
                SHOP BY CATEGORY
            </Text>
            <ScrollView horizontal={true} style={styles.ShopByContainer}>
            {data.map(item => {
                return(
                    <ShopCat key={item.route} payload={item} />
                );
            })}
            </ScrollView>
            <ScrollView horizontal={true} style={styles.ShopByContainer}>
            {data.map(item => {
                return(
                    <ShopCat key={item.route} payload={item} />
                );
            })}
            </ScrollView>

        </View>
    );

};

const styles = StyleSheet.create({
    ShopBy:{
        width: `95%`,
        alignSelf:`center`,
        marginVertical: 10,
    },
    heading:{

        fontSize:22,
        fontWeight: `700`,

    },
    ShopByContainer:{
        height:200,
        // width:`100%`,
        flexDirection:`row`,
        overflow:`scroll`,
    },
})