import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import FeaturedCard from './FeaturedCard';

export default function Featured(){

    const data = [
        {
            name:`Sai Store`,
            image:`https://thumbs.dreamstime.com/b/friendly-indian-male-supermarket-hypermarket-employee-holding-brown-paper-grocery-bag-thumb-up-as-like-gesture-supermarket-141267161.jpg`,
            route: `IDKfghghds`,
        },
        {
            name:`Mahaveer Store`,
            image:`https://media.istockphoto.com/photos/sikh-man-at-grocery-store-products-picture-id1213525531?k=20&m=1213525531&s=612x612&w=0&h=zUP6BanfHjDD0sqkSxCyHd8Uk5rnvElca0hiM4wlGo0=`,
            route: `IDKdvnjs`,
        },
        {
            name:`Place2Shop`,
            image:`https://media.istockphoto.com/photos/woman-in-grocery-aisle-of-supermarket-picture-id1213508559?k=20&m=1213508559&s=612x612&w=0&h=oO6JhLl6gSYeA3aMQcFWcvTSu6iQKkBTJmHvLVryw1k=`,
            route: `IDKdhgds`,
        },
        {
            name:`7heven`,
            image:`https://media.istockphoto.com/photos/happy-man-holding-digital-tablet-at-supermarket-picture-id1208620539?k=20&m=1208620539&s=612x612&w=0&h=HcLIwmnK-C0h5jYVx3TXSRmhf8VDKcT-PMMbzoBcqx8=`,
            route: `IDKdsffd`,
        },
    ];

    return(
        <View style={styles.featured}>
            <Text style={styles.heading}>
                FEATURED STORE
            </Text>
            <ScrollView horizontal={true} style={styles.featuredContainer}>
            {data.map(item => {
                return(
                    <FeaturedCard key={item.route} payload={item} />
                );
            })}
            </ScrollView>

        </View>
    );

};

const styles = StyleSheet.create({
    featured:{
        height: 240,
        width: `95%`,
        alignSelf:`center`,
    },
    heading:{

        fontSize:22,
        fontWeight: `700`,

    },
    featuredContainer:{
        height:`100%`,
        // width:`100%`,
        flexDirection:`row`,
        overflow:`scroll`,
    },
})