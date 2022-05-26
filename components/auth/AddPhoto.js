import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { launchCameraAsync,launchImageLibraryAsync } from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';


export default AddPhoto = ({ navigation }) => {

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

    };
    let chooseImageHandler = async () => {
        const image = await launchImageLibraryAsync();
        console.log(image);
    }



    return(
        <View style = {styles.PhotoConatiner}>
            <Pressable onPress={takeImageHandler}>
                <Text>
                    Take Image
                </Text>
            </Pressable>
            <Pressable onPress={chooseImageHandler}>
                <Text>
                    Take Image
                </Text>
            </Pressable>
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
        justifyContent: 'center',
        alignItems: "center",
    },
}); 