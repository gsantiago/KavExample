import React from 'react';
import {View, Text, ViewProps} from 'react-native';

export function Field({
  label,
  children,
  ...props
}: ViewProps & {label: string}) {
  return (
    <View {...props}>
      <Text style={{fontSize: 18, color: '#111'}}>{label}</Text>
      {children}
    </View>
  );
}
