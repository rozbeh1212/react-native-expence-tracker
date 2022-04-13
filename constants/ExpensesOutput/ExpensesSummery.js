//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

function ExpensesSummery({ expenses, priodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amunt;
  }, 0); //

  return (
    <View>
      <Text>{priodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

// const styles = StyleSheet({
// });

export default ExpensesSummery;
