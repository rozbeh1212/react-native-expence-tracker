import React from 'react';
import { View, Text,TextInput } from 'react-native';

export default function Input({ label, textInputConfig,value, onChangeText, placeholder, secureTextEntry }) {
  return (
    <View>
    <Text>{label }</Text>
    <TextInput {...textInputConfig}/>
     </View>
  );
}
