import React from 'react';
import {Text, View, Image} from 'react-native';
import LoginText from '../Atoms/Text/LoginText';
import {SettingPageStyles} from './SettingPageStyles';
import SegmentedButton from '../Atoms/Button/SegmentedButton';
import {aboutus, home,payment,privacy} from '../Atoms/ImageImports/ImageImport';

const SettingsPage = () => {
  const languageButtons = [
    {value: 'eng', label: 'English'},
    {value: 'spanish', label: 'española'},
    {value: 'tamil', label: 'தமிழ்'},
  ];

  const themeButtons = [
    {value: 'light', label: 'Light'},
    {value: 'medium', label: 'medium'},
    {value: 'dark', label: 'dark'},
  ];

  return (
    <View style={SettingPageStyles.mainContainer}>
      <View style={SettingPageStyles.headContainer}>
        <LoginText text="Settings" type="loginheading" />
      </View>
      <View style={SettingPageStyles.languageContainer}>
        <Text style={SettingPageStyles.sectionTitle}>Language Settings</Text>
        <SegmentedButton buttons={languageButtons} />
        <Text style={SettingPageStyles.sectionTitle}>Themes</Text>
        <SegmentedButton buttons={themeButtons} />
      </View>
      <View style={SettingPageStyles.sectionContainer}>
        <Text style={SettingPageStyles.sectionTitle}>
          Notifications Settings
        </Text>

      </View>

      <View style={SettingPageStyles.sectionContainer}>
        <Text style={SettingPageStyles.sectionTitle}>Location Settings</Text>

      </View>
      <View style={SettingPageStyles.sectionContainer}>
      {/* <Image source={payment} style={SettingPageStyles.smallImage} /> */}
        <Text style={SettingPageStyles.sectionTitle}>Payment Preference</Text>

      </View>
      <View style={SettingPageStyles.sectionContainer}>
      {/* <Image source={privacy} style={SettingPageStyles.smallImage} /> */}
        <Text style={SettingPageStyles.sectionTitle}>Privacy Policy</Text>

      </View>
      <View style={SettingPageStyles.sectionContainer}>
      {/* <Image source={aboutus} style={SettingPageStyles.smallImage} /> */}
        <Text style={SettingPageStyles.sectionTitle}>About us</Text>

      </View>
      
    </View>
  );
};

export default SettingsPage;
