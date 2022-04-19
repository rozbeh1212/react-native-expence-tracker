import { View } from "react-native";
import React from "react";

function ExpenseForm(){
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
      <View style={styles.inputs}>
        <Input
          style={styles.rowInput}
          lable='Amount'
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          lable='Date'
          textInputConfig={{
            palaceholder: "YYYY-MM-DD",
            maxLenght: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        lable='Description'
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          autoCorrect: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
     marginTop: 50,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  rowInput: {
   flex: 1,
  },
});
 
export default ExpenseForm;
