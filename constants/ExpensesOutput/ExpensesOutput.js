//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummery from "./ExpensesSummery";
import { GlobalStyles } from './../styles';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'shoes',
    amount: 50,
    date: new Date('2021-12-12')
  }
]


function ExpensesOutput ({ expenses,expensesPeriod}) {  
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={DUMMY_EXPENSES} priodName={expensesPeriod} /> 
      <ExpensesList expenses={DUMMY_EXPENSES }/>
    </View>
  );
};

const styles = StyleSheet({
  container: {
    flex:1,
    padding: 24,
    backgroundolor: GlobalStyles.colors.primary700
  }
}); 

export default ExpensesOutput;  // this is 