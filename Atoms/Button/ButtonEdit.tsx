import React from 'react'
import { Button } from 'react-native-paper';
import { ButtonStyles } from './ButtonStyles';

type myProps=
{
    type:string
}

export default function ButtonEdit({type}:myProps) {
  return (
    <Button  mode="contained" style={ButtonStyles.editButton} >
    {type} 
    </Button>
  )
}
