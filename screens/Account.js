import * as React from 'react';
import { View, Text } from 'react-native';
import Btn from "../components/Btn"
import firebase from 'firebase/app';
export default function Account({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>   </Text> 
             <Btn style={{ width: "50%",backgroundColor: "black" }} title="Update Information"></Btn>  
             <Btn style={{ width: "50%",backgroundColor: "#ffd700" }} title="Log Out" onClick={() => console.warn("Logged Out") + firebase.auth().signOut()}
            
             /> 
        </View>
    );
}