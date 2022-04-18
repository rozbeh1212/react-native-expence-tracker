//import liraries
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../constants/ExpensesOutput/ExpensesOutput";
import RecentExpenses from "./RecentExpenses";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext); //this is a hook to get the expenses from the context

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    
    const today = new Date();
    const date7daysago = new Date(today,7);
     return (expense.date >= date7daysago) && (expense.date <= today); //this will return the expenses that are in the last 7 days
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' />
  );
}
// const styles = StyleSheet({
// });

export default RecentExpenses;
