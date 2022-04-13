//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExpensesOutput from '../constants/ExpensesOutput/ExpensesOutput';
import RecentExpenses from './RecentExpenses';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />
}

// const styles = StyleSheet({
// });

export default RecentExpenses;
