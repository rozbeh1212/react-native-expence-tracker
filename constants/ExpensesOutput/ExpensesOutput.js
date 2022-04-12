//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummery from "./ExpensesSummery";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View style={styles}>
    <ExpensesSummery />
    <ExpensesList/>
    </View>
  );
};

const styles = StyleSheet({});

export default ExpensesOutput;
