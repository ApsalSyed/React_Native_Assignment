/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// importing components
import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { LoginPage } from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import MyComponent from '../Atoms/Navbar/Home';
import AppNavigation from '../Navigation/AppNavigation';



function App(): React.JSX.Element {
  
  return (
    // <SafeAreaView  style={{flex:1}} >
    //   <LoginPage/> 
    //   <HomePage/> 
    //   <MyComponent/>


    //  </SafeAreaView> 
    <AppNavigation/>
  );
}



export default App;
