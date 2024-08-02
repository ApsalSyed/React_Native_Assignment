import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomePage from '../../Pages/HomePage';
import SettingsPage from '../../Pages/SettingsPage';
import {LoginPage} from '../../Pages/LoginPage';
import ProfilePage from '../../Pages/ProfilePage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const HomeRoute = () => <HomePage />;

const SettingRoute = () => <SettingsPage />;

const LoginRoute = () => <LoginPage />;

const ProfileRoute = () => <ProfilePage />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', focusedIcon: 'home'},
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'home',
    },
    {key: 'profile', title: 'Profile', focusedIcon: 'home'},
    {key: 'login', title: 'Sign Out', focusedIcon: 'login'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    settings: SettingRoute,
    login: LoginRoute,
    profile: ProfileRoute,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default MyComponent;
