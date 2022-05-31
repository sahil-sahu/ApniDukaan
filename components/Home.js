import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

function HomeScreen(){

    return(
        <View style={styles.hero}>
            <Image style={styles.logo} source={require('../assets/body.png')} />
        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    hero:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    },
    logo:{
        width:'100%',
        // height: '100%',
        transform: [{translateY: 60}]
    }
})