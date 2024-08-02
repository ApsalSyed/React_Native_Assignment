import React from 'react';
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Pages/HomePage';
import { home, profile, update, versions, login } from '../Atoms/ImageImports/ImageImport';
import {LoginPage} from '../Pages/LoginPage';
import SettingsPage from '../Pages/SettingsPage';
import ProfilePage from '../Pages/ProfilePage';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
          
          // position: "absolute",
          backgroundColor: "white",
        },
      }}
    >
            <Tab.Screen
        name='Home'
        component={HomePage}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={home} 
              resizeMode='contain'
              style={{
                height: 27,
                width: 27,
                tintColor: focused ? "#3a4b6a" : "black",
              }}
            />
          ),
        }}
      />


      <Tab.Screen
        name='Profile'
        component={ProfilePage}
        options={{
          // header
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={profile} 
              resizeMode='contain'
              style={{
                height: 24,
                width: 25,
                tintColor: focused ? "#3a4b6a" : "black",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsPage}
        options={{
          headerShown:false,

          tabBarIcon: ({ focused }) => (
            <Image 
              source={versions} 
              resizeMode='contain'
              style={{
                height: 24,
                width: 25,
                tintColor: focused ? "#3a4b6a" : "black",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Sign-Out'
        component={LoginPage}
        options={{
          tabBarStyle:{display:"none"},
          headerShown:false,

          tabBarIcon: ({ focused }) => (
            <Image 
              source={login} 
              resizeMode='contain'
              style={{
                height: 24,
                width: 25,
                tintColor: focused ? "#3a4b6a" : "black",
              }}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
