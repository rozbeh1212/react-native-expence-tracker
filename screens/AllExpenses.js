//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react/cjs/react.production.min';
import ExpensesOutput from '../constants/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/exprenses-context';


function AllExpenses() {
  const expensesCtx =  useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total"/>
}

// const styles = StyleSheet({
// });

export default AllExpenses;
