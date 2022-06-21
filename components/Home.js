import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import Header from './header';
import Featured from './Main/Featured';
import Offer from './Main/Offer';

function HomeScreen(){

    return(
        <ScrollView style={styles.hero}>
            <Header></Header>
            <Featured />
            <Offer />
        </ScrollView>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    hero:{
        flex:1,
        // justifyContent: 'center',
        // alignItems: "center",
        // padding:20,
        backgroundColor:`#fff`,
    },
    logo:{
        width:'100%',
        // height: '100%',
        transform: [{translateY: 60}]
    }
})