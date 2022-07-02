import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { launchCameraAsync,launchImageLibraryAsync } from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

import React, { useState } from 'react';


export default AddPhoto = ({ navigation }) => {

    const [image, setImage] = useState([false, null]);

    var options = {
        title: 'Select Image',
        customButtons: [
          { 
            name: 'customOptionKey', 
            title: 'Choose file from Custom Option' 
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

    let takeImageHandler = async () => {
        const image = await launchCameraAsync({
            aspect:[3,4],
            quality: .75,
        });
        console.log(image);
        setImage([true, image]);
        
    };
    let chooseImageHandler = async () => {
        const image = await launchImageLibraryAsync();
        // console.log([true, image]);
        setImage([true, image]);
    }



    return(
        <View style = {styles.PhotoConatiner}>
            <View style={styles.preViewContainer}>
                {image[0]?<Image style={styles.preView} source={image[1]} />:<Image style={styles.preView} source={require('../../assets/shop.png')} />}
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={takeImageHandler}>
                    <Text style={styles.buttonText} >
                        Take Image
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={chooseImageHandler}>
                    <Text style={styles.buttonText} >
                        Choose Image
                    </Text>
                </Pressable>
            </View>
            <View style={styles.nextButt}>
                <Pressable android_ripple={{opacity: '.5', borderless: true}} onPress={() => navigation.navigate('Form3')}>
                    <AntDesign name="rightcircleo" size={48} color="#FFC886" />
                </Pressable>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    PhotoConatiner:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: "center",
        paddingBottom:20,
    },

    preView:{
        width: 320,
        height:420,
        resizeMode: 'contain',
        borderRadius:10,
        borderWidth:2,
        borderColor:"#FFC886",
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"100%",
        margin:10,
    },

    button:{
        padding:15,
        backgroundColor:"#FFC886",
        borderRadius:10,
        // color:"#fff",
    },

    buttonText:{

        fontSize:18,
        
    },
    nextButt:{

        height:"20%",
        justifyContent:"center",
        alignItems:"flex-end",
        width:"60%",
        
    },
}); 