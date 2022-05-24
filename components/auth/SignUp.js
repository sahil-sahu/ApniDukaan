import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';


function NewUser(){

    return(
        <View style={styles.newUser}>

            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo-alt.png')} />
                </View>
                <View style={styles.headerbox}>
                    <Text style={styles.headertxt}>
                        Just fillout some basic details & get started
                    </Text>
                </View>
            </View>
            <View style={styles.name}>
                <View style={styles.label}>
                    <Text style={styles.labeltxt}>
                        Name
                    </Text>
                </View>
                <TextInput style={styles.Box} />
            </View>
            <View style={styles.store}>
                <View style={styles.label}>
                    <Text style={styles.labeltxt}>
                        Store Name
                    </Text>
                </View>
                <TextInput style={styles.Box}/>
            </View>
            <View style={styles.mail}>
                <View style={styles.label}>
                    <Text style={styles.labeltxt}>
                        E-mail
                    </Text>
                </View>
                <TextInput style={styles.Box}/>
            </View>
            <View>
                <Pressable android_ripple={{opacity: '.5', borderless: true}}>
                    <Image style={styles.nexticon} source={require('../../assets/logo-alt.png')} />
                </Pressable>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    newUser:{
        // backgroundColor:"#000",
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    logoContainer:{
        width:'75%',
        margin:15,
    },
    logo:{
        width:'100%',
        height:85,
        
    },
    header:{
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
        margin:20,
    },
    headertxt:{
        fontSize:20,
    },
    label:{
        transform:[
            {translateY:-9},
            {translateX:15}
        ],
        width:"25%"
    },
    labeltxt:{

        backgroundColor:"#fff",
        textAlign:'center',

    },
    name:{

        borderColor:'#ababab',
        borderWidth:1,
        width: "80%",
        height: 45,
        borderRadius:5,
        margin:25,

    },
    Box:{
        width:'100%',
        height:'100%',
        padding: 10,
        fontSize:18,
        transform:[{ translateY : -9}]
    },
    mail:{

        borderColor:'#ababab',
        borderWidth:1,
        width: "80%",
        height: 45,
        borderRadius:5,
        margin:25,

    },
    store:{

        borderColor:'#ababab',
        borderWidth:1,
        width: "80%",
        height: 45,
        borderRadius:5,
        margin:25,

    },
})

export default NewUser;