import { Pressable, Text, View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function IconButton({icon,size,color,onPress}) { //icon,size,color,onPress are props of IconButton component to pass to it parent component
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
 buttonContainer: {
  padding: 8,
  margin: 6,
  borderRadius: 24,
  marginHorizontal: 8,
  marginHorizontal: 2,
 },
 pressed: {
  backgroundColor: "GreenYellow",
  opacity: 0.75
 }
});

export default IconButton;
