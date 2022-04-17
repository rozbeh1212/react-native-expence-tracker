//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummery from "./ExpensesSummery";
import { GlobalStyles } from "./../styles";



function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} priodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 0,
    paddingTop:24,
    backgroundolor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutput; // this is
