import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";



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

export default function Loginscreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    return <View style={styles.view}>
       
        <Image style={styles.img} source={require('../assets/S1.png')} />
     <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 20 }}>Smart package storage & delivery</Text> 
        <TextBox placeholder="  Email Address"  onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="  Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
        
            <Btn onClick={() => Login()} title="Login" style={{ width: "48%" , backgroundColor: "black"}} />
            <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "#ffd700" }} />
           
    
    </View>
    </View>
}
