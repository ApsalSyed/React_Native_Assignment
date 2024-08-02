import React from 'react';
import { TextInput } from 'react-native-paper';
import { InputBoxStyle } from './InputBoxStyle';

type myProps = {
  labels: string;
  secureText: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function InputBoxs({ labels, secureText, value, onChangeText }: myProps) {
  return (
    <TextInput
      label={labels}
      secureTextEntry={secureText}
      style={InputBoxStyle.inputBox}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
