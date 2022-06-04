import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Loginscreen from './Login';
import SignUpScreen from './SignUp';
import firebase from 'firebase/app';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';


import "firebase/auth";

// Screens
import UserPackages from './UserPackages'
import UserHome from './UserHome'
import UserAccount from './UserAccount'
import Account from './Account';

//Screen names
const homeName = "Home";
const account = "Account";
const packages = "Packages";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
function Root() {
    return (
      <Drawer.Navigator>
      <Drawer.Screen name="Details" component={MyRewardsStackNavigator} />
        <Stack.Screen name="Settings" component={LocationsStackNavigator} />
      </Drawer.Navigator>
    );
  }

function MainContainer() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    //Checking if firebase has been initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(app);
    } else {
      firebase.app();
    }
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false);
      }
    });


  return <NavigationContainer>       
     {isLoggedIn?
      
     <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName =  'planet-outline';

            } else if (rn === account) {
              iconName =  'person';

            } else if (rn === packages) {
              iconName = 'checkbox';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          activeBackgroundColor: 'white',
          inactiveBackgroundColor: '#ffd700',
          labelStyle: { paddingBottom: 6, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>  
      
     
      <Tab.Screen name={account} component={UserAccount} options={{
          headerTitleAlign: 'center',
          title: 'My Account',
          headerStyle: {
            backgroundColor: '#ffd700',
             
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
<Tab.Screen name={packages} component={UserPackages} options={{
          headerTitleAlign: 'center',
          title: 'My Packages',
          headerStyle: {
            backgroundColor: '#ffd700',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Tab.Screen name={homeName} component={UserHome}options={{
          headerTitleAlign: 'center',
          title: 'Home',
          headerStyle: {
            backgroundColor: '#ffd700',
           
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
          
        
        
  
       


      </Tab.Navigator>
     
    
      :
      
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} /> 
        
      </Stack.Navigator>}

    </NavigationContainer>
  
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      overflow: 'hidden',
    },
  })

export default MainContainer;