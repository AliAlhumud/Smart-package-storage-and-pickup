import * as React from 'react';
import { View, Text , Image,StyleSheet} from 'react-native';
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import Barcode from 'react-native-barcode-builder';
export default function Account({ navigation }) {
    return (


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
  
             <Text>  </Text> 
             <Btn style={{ width: "50%",backgroundColor: "black" }} title="Update Information"></Btn>  
             <Btn style={{ width: "50%",backgroundColor: "#ffd700" }} title="Log Out" onClick={() => console.warn("Logged Out") + firebase.auth().signOut()}
            
             /> 
        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        flex: 5,
        paddingVertical:8,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"

    }    ,
    img:{
        
        resizeMode: "contain",
        height: 200,
        width: 200,
        marginVertical:1,
        alignItems: 'stretch',
            }
})
