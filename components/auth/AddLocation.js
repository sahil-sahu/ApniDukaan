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
        <Pressable onPress={getLocation} style={styles.LocoConatiner}>
                <Text>
                    Add Location
                </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    LocoConatiner:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    },
}); 