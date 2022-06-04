import React, { useState } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native"





import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


export default function SignUpScreen({ navigation }) {

    const auth = firebase.auth;
    const firestore = firebase.firestore;

    const [values, setValues] = useState({
        name: "",
        email: "",
        location: "",
        phoneNo: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2, name, location, phoneNo  } = values

        if (pwd == pwd2) {
            auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                    firestore().collection("Users").doc(auth().currentUser.uid).set({
                        uid: auth().currentUser.uid,
                        name,
                        email,
                        pwd2, 
                        location, 
                        phoneNo
                    })
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
    }
    return <View style={styles.view}>
     <KeyboardAvoidingView>

<Text style={{ fontSize: 34, fontWeight: "bold", marginBottom: 10, textAlign:"center",justifyContent:'center',color:'#ffd700'}}>Sign Up</Text>
<TextBox placeholder="  Full name" onChangeText={text => handleChange(text, "name")} />
<TextBox placeholder="  +966 Phone Number" onChangeText={text => handleChange(text, "phoneNo")} />
<TextBox placeholder="  Location" onChangeText={text => handleChange(text, "location")} />
<TextBox placeholder="  Email Address" onChangeText={text => handleChange(text, "email")} />
<TextBox placeholder="  Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}/>
<TextBox placeholder="  Confirme Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}/> 
</KeyboardAvoidingView>
<View style={{  flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%",}}>

    <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "50%",backgroundColor: "black" }} />
    <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#ffd700" }} />
  
</View>

</View>
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "105%",
        alignContent:"center",
        justifyContent: "center",
        alignItems: "stretch"
    }
})