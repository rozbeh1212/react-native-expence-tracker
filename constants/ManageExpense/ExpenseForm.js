import { View } from "react-native";
import React from "react";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm(onCancel,onCancel, onSubmit, defaultValue) {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  //this function has  three parameters inputIdentifier and enteredValue which are the name of the input and the value of the input

  function inputChangeHandler(
    submitButtonLabel,
    inputIdentifier,
    enteredValue
  ) {
    setInputValue((curInputValues) => {
      //  curInputValues is the current state of the inputValue
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    // this function is called when the submit button is pressed
    const expense = {
      // expense is the object that is passed to the onSubmit
      amount: +inputValue.amount, // +inputValue.amount is used to convert the string to a number
      date: new Date(inputValue.date),
      description: inputValue.description,
    };
    onSubmit(expense); // onSubmit is the function passed to the ExpenseForm component
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
