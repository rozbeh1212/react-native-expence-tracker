import React from 'react';
import { View, Text,TextInput, View, StyleSheet } from 'react-native';

export default function Input({ label, textInputConfig, value, onChangeText, placeholder, secureTextEntry }) {
  const inputStyles = [style.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(style.multiline);
  }

  



  return (
    <View style={style.inputConainer}>
      <Text style={style.label}>{label}</Text>
      <TextInput style={style.input} {...textInputConfig} />
    </View>
  );
}
const style = StyleSheet.create({
  inputConainer: {
    marginHorizontal: 4,
    marginVertical: 9,
  },
  label: {
    fontSize: 13,
    color: "#c6affc",
    marginBottom: 4,
  },
  input: {
    borderBottomColor: "#c6affc",
    color: "#4A148C",
    padding: 6,
    borderRadius: 7,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  
}); 
