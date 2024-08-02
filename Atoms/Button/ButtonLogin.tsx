import React from 'react';
import { Button } from 'react-native-paper';
import { ButtonStyles } from './ButtonStyles';

type myProps = React.ComponentProps<typeof Button> & {
  buttonType: string;
};

export default function ButtonLogin({ buttonType, ...props }: myProps) {
  return (
    <Button mode="contained" style={ButtonStyles.buttonStyle} {...props}>
      {buttonType}
    </Button>
  );
}
