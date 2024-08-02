import React from 'react';
import { Text, View } from 'react-native';
import { TextStyle } from './TextStyles';

interface LoginTextProps {
  text: string, 
  password?:string,
  email?:string,
  type: "heading"|"subHeading"|"homePageTitle"|"normalText"|"profileText"|"loginheading"|"Order"
}

function LoginText({ text,type}: LoginTextProps) {
  return (
    <Text style={TextStyle[type]}>{text}</Text>
  );
};

export default LoginText;
