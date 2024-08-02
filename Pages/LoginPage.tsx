import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import LoginText from '../Atoms/Text/LoginText';
import InputBoxs from '../Atoms/InputBox/InputBox';
import ButtonLogin from '../Atoms/Button/ButtonLogin';
import Logo from '../Atoms/Logo/Logo';
import { logo } from '../Atoms/ImageImports/ImageImport';
import { LoginPageStyle } from './LoginPageStyle';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type Props={
  navigation:NativeStackNavigationProp<any>
}

export const LoginPage = ({navigation}:Props) => {
  const [name, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [err, setErrors] = useState({ username: '', password: '' });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let errors = { username: '', password: '' };
    if (!name) {
      errors.username = "Username required";
    } else if (!validateEmail(name)) {
      errors.username = "Invalid email format.";
    }

    if (!pass) {
      errors.password = "Password required";
    } else if (pass.length < 4) {
      errors.password = "Password must be at least 4 characters ";
    }

    setErrors(errors);

    return !errors.username && !errors.password;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", name, pass);
      setUsername("");
      setPassword("");
      setErrors({ username: '', password: '' });
    navigation.navigate("Home")

      
    }
  };


  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View style={LoginPageStyle.container}>
          <View style={LoginPageStyle.logo}>
            <Logo type={logo} />
          </View>

          <LoginText text="Login" type="heading" />
          <LoginText text="Please Sign In to continue" type="subHeading" />

          <InputBoxs labels="E-mail" secureText={false} value={name} onChangeText={setUsername} />
          {err.username ? <Text style={LoginPageStyle.errorText}>{err.username}</Text> : null}

          <InputBoxs labels="Password" secureText={true} value={pass} onChangeText={setPassword} />
          {err.password ? <Text style={LoginPageStyle.errorText}>{err.password}</Text> : null}

          <ButtonLogin buttonType="Login" onPress={handleSubmit} children={undefined} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
