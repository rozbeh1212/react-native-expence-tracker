//import liraries
import { View, Text, TextInput } from "react-native";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../constants/UI/IconButton";
import { GlobalStyles } from "./../constants/styles";
import { ExpensesContext } from "../store/ExpensesContext";
import { ExpenseForm } from "./../constants/ManageExpense/ExpenseForm";

function ManageExpenses({ route, navigation }) {
  //rout is a prop of ManageExpenses component to pass to it parent component
  const editedExpenseId = route.params.expenseId; //this is the id of the expense that we want to edit
  const isEditting = !!editedExpenseId; // if editedExpenseId is not null or undefined then isEditting is true
  const expepensesCtx = useContext(ExpensesContext);
  const selectedExpense = expepensesCtx.expenses.find( 
    (expense) => expense.id === editedExpenseId
  );


  useLayoutEffect(() => {
    // this is a hook to set the title of the screen to the name of the expense that we want to edit if it is editting else to set the title to add new expense
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);

  function deleteExpenseHandler() {
    navigation.goBack(); //this will go back to the previous screen
    expepensesCtx.deleteExpense(editedExpenseId);
  }

  function cancleHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditting) {
      expepensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expepensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditting ? "Update" : "Add"}
        onSubmit={confirmHandler} //this is the function that we imported from the context
        onCancel={cancleHandler}
        defaultValue={selectedExpense}
      />

      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet({
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.error200,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});

export default ManageExpenses;
