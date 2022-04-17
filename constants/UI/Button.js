import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { GlobalStyles } from "./../styles";

function Button({ children, onPress, mod, style, disabled }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mod === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mod === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "black",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "#c6affc",
    borderRadius: 4,
  },
});

export default Button;
