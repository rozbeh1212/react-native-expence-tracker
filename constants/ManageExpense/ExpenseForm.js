import { View } from "react-native";
import React from "react";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm(onCancel, onSubmit) {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(submitButtonLabel ,inputIdentifier, enteredValue) {
    //this function has two parameters inputIdentifier and enteredValue which are the name of the input and the value of the input
    setInputValue((curInputValues) => {
      //  curInputValues is the current state of the inputValue
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
 
  function submitHandler() {
    
  }
    
  return (
    <View style={styles.form}>
      <View style={styles.inputs}>
        <Input
          style={styles.rowInput}
          lable='Amount'
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"), //this is the function that we imported from the context
            value: inputValue.amount, //this is the value of the input
          }}
        />
        <Input
          style={styles.rowInput}
          lable='Date'
          textInputConfig={{
            palaceholder: "YYYY-MM-DD",
            maxLenght: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>
      <Input
        lable='Description'
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValue.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancle
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
  },
  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 8,
    minWidth: 120,
  },
});

export default ExpenseForm;
