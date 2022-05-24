import { StyleSheet, Text, View } from 'react-native';


function HomeScreen(){

    return(
        <View style={styles.hero}>
            <Text>Home Screen Bro!</Text>
        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    hero:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    }
})