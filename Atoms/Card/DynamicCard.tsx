import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

interface CardProps {
  imageUri?: ImageSourcePropType;
  title?: string;
  content?: string;
}

export default function DynamicCard({ imageUri, title,content }: CardProps) {
  return (
    <View>
      <Image source={imageUri} />
      <Text>{title}</Text>
      {/* <Text>{content}</Text> */}
    </View>
  );
}
