import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './Login';



  
  





export default function LoginScreen({navigation}) {
    return <View style={styles.view}>
    
<Text style={{fontSize: 34, fontWeight: "800", marginBottom: 30, alignContent: "space-around", alignItems: "baseline"}}>Main home page, 
Here i want to do nested navagtion with bottom tabs and drawer 
</Text>

<Btn title="Log Out" onClick={() => firebase.auth().signOut()} />

       
    </View>
  
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
 
  });