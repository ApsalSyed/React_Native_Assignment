import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { ButtonStyles } from './ButtonStyles';

interface SegmentedButtonProps {
  buttons: Array<{value: string;label: string;}>;
}

export default function SegmentedButton({ buttons }: SegmentedButtonProps) {
  const [value, setValue] = React.useState('');
  return (
    <SafeAreaView style={ButtonStyles.segmentcontainer}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={buttons}
      />
    </SafeAreaView>
  ); 
}
