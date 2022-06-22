import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';

export default function Nearby(){

    return(
        <View style={styles.nearby}>
            <Text style={styles.heading}>
                NEARBY STORES
            </Text>

        </View>
    );

};

const styles = StyleSheet.create({
    nearby:{
        width: `95%`,
        alignSelf:`center`,
        marginVertical: 10,
    },
    heading:{

        fontSize:22,
        fontWeight: `700`,

    },
    nearbyContainer:{
        height:`100%`,
        // width:`100%`,
        flexDirection:`row`,
        overflow:`scroll`,
    },
})