import { View } from "react-native";
import React from "react";

function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View>
      <Input
        lable='Amount'
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
    <Input lable='Date' textInputConfig={{
     palaceholder: 'YYYY-MM-DD',
     maxLenght: 10,
     onChangeText: () => {},

    }}/>
    <Input lable='Description' textInputConfig={{ 
     multiline: true,
     autoCapitalize: 'sentences',
     autoCorrect: false,
       }} />
    </View>
  );
}

export default ExpenseForm;
