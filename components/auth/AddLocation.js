import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';

export default AddLocation = () => {
 
    let getLocation = async () => {

        let { status } = await requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
        let location = await getCurrentPositionAsync();
        console.log(location);

    };

    return(
        <View style={styles.LocoConatiner}>
            <Pressable style={styles.button} onPress={getLocation} >
                <Text style={styles.buttonText}>
                    Add Location
                </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    LocoConatiner:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    },
    button:{
        padding:15,
        paddingHorizontal:25,
        backgroundColor:"#FFC886",
        borderRadius:10,
        // width:100,
        justifyContent:"center",
        height:60,
    },
    buttonText:{
        fontSize:18,
    },
}); 