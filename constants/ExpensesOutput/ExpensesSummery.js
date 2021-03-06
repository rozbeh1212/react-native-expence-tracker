//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "./../styles";

function ExpensesSummery({ expenses, priodName }) { // this function have two parameters: expenses and priodName   epxesns is an array of objects, priodName is a string 
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amunt;
  }, 0); //

  return (
    <View style={styles.constainer}>
      <Text style={styles.period}>{priodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet({
  constainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary500,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpensesSummery;
