import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { ButtonStyles } from './ButtonStyles';

export default function IconButtons() {
  return (
    <IconButton
    icon="camera"
    size={20}
    style={ButtonStyles.iconButtons}
    onPress={() => console.log('Pressed')}
  />
  )
}
