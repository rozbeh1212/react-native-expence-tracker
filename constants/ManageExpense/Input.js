import React from "react";
import { View, Text, TextInput, View, StyleSheet } from "react-native";

export default function Input({ label, textInputConfig, style }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }

  return (
    <View style={[styles.inputConainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}
const styles = StyleSheet.create({
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
