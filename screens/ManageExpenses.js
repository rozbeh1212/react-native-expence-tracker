//import liraries
import { View, Text } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../constants/UI/IconButton";
import { GlobalStyles } from "../constants/GlobalStyles";
import { GlobalStyles } from "./../constants/styles";
function ManageExpenses({ route, navigation }) {
  //rout is a prop of ManageExpenses component to pass to it parent component
  const editedExpenseId = route.params.expenseId; //this is the id of the expense that we want to edit
  const isEditting = !!editedExpenseId; // if editedExpenseId is not null or undefined then isEditting is true

  useLayoutEffect(() => {
    // this is a hook to set the title of the screen to the name of the expense that we want to edit if it is editting else to set the title to add new expense
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);

function deleteExpenseHandler() {
  
}

  return (
    <View style={styles.container} >
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  } 
});

export default ManageExpenses;
