import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

function SignInScreen({ route }){
    
    function gotoHome(){
        const { pageChanger } = route.params;
        pageChanger(true);
      }

    return(
        <View style={styles.authBox}>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/logo-alt.png')} />
            </View>
            <View style={styles.welcome}>
                <Text style={styles.mainText}>Welcome to Apni Dukaan</Text>
                <Text style={styles.helper}>your one stop solution for managing your store</Text>
            </View>
            <View style={styles.signUpform} >
                <View style={styles.phoneContainer}>
                    <TextInput style={styles.phone} keyboardType={'phone-pad'} placeholder="XXXXX-XXXXX" maxLength={13}/>
                </View>
               <View style={{...styles.otpButton,overflow:'hidden', height: 60,}}>
                    
                        <View style={styles.submit} android_ripple={{opacity: '.5', borderless: true}}>
                            <Pressable android_ripple={{opacity: '.5', borderless: true}} style={styles.otpButton} onPress={gotoHome}>
                                <Text style={styles.otp}>
                                    GET OTP
                                </Text>
                            </Pressable>
                        </View>
               </View>
            </View>
        </View>
    )

}

export default SignInScreen;

const styles = StyleSheet.create({
    authBox:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#fff",
    },
    imageContainer:{
        width:'100%',
        alignItems:'center',
        padding: 25,
    },
    logo:{
        width: 215,
        height: 75,
        padding:5,
        borderRadius: 15,
    },
    welcome:{
        padding:5,
        alignItems: 'center',
    },
    mainText:{
        fontSize: 28,
        fontWeight: '600',
        padding:5,
    },
    helper:{
        fontSize: 16,
        padding:5,
    },
    signUpform:{
        width: "100%",
        padding: 20,
        alignItems: 'center',
    },
    phoneContainer:{
        width: '75%',
        height: 50,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: '#ababab',
        borderWidth: 1,
        margin: 10,
    },
    phone:{
        width: "100%",
        height: "100%",
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    otpButton:{
        width:"100%", 
        alignItems:"center",
        margin: 5,
    },
    submit:{
        backgroundColor:"#FFC886",
        height: 50,
        width: "75%",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    otp:{
        color:"#fff",
        fontWeight:'700',
        letterSpacing: 3,
        // padding: 10,
        fontSize: 20,
    },

})