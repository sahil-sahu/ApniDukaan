import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { useNavigationState } from '@react-navigation/native'; 

function StockItem(props){

    // const navigation = nav;;

    const item = props.item;
    const navigation = props.navigation;

    function getDetail(){
        navigation.navigate('DetailedItem',{
            title :item.title,
            id : item.id,
        });
        // navigation.navigate({
        //     name: 'DetailedItem',
        //     options: {
        //         {title: item.title,},
        //     },
        //   });
    }

    return (
        <View style={styles.Card}>
            <Pressable android_ripple={{opacity: '.5', borderless: false}}  style={styles.CardContainer} onPress={getDetail}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>
                   {item.title} 
                </Text>
                </View>
                <View style={styles.Available}>
                    <Text style={styles.AvailableTxt}>
                        202/300
                    </Text>
                </View>
            </Pressable>
        </View>

    )
};

export default StockItem;

const styles = StyleSheet.create({

    Card : {
        width: "95%",
        height: 100,
        backgroundColor: "#FFC886",
        margin: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        overflow: 'hidden',

    },
    CardContainer : {
        width:'100%',
        height:'100%',
        justifyContent: "space-evenly",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#FFC886",

    },
    titleContainer : {
        flex:3,
        padding: 10,
        backgroundColor:"#fff",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent:"center",
        height: '100%',
        
    },
    title:{
        fontSize: 18,

    },
    Available : {
        flex:1,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:20,
    },
    AvailableTxt : {
        color:"#fff",
        fontSize: 20,
        // fontWeight: 600,
    },

});