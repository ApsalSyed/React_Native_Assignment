import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import HomePage from '../Pages/HomePage';
import {LoginPage} from '../Pages/LoginPage';
import SettingsPage from '../Pages/SettingsPage';
import ProfilePage from '../Pages/ProfilePage';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 250
        }
      }}
    >
      <Drawer.Screen
        name='Login'
        options={{
          drawerLabel: "Login",
          title: "Login",
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={LoginPage}
      />
     <Drawer.Screen
        name='Home'
        options={{
          drawerLabel: "Home",
          title: " ",
          headerShown:true,
          headerShadowVisible: false,
        }}
        component={BottomTabNavigation}
      />


  
      <Drawer.Screen
        name='Settings'
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerShadowVisible: false,
        }}
        component={SettingsPage}
      />

      <Drawer.Screen
        name='Profile'
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          headerShadowVisible: false,
        }}
        component={ProfilePage}
      />

      
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
