import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { LogoStyle } from './LogoStyle'

type myprops=
{
    type?:ImageSourcePropType
}
export default function Logo({type}:myprops) {
  return (
    <Image source={type} style={LogoStyle.logo}/>
  )
}
