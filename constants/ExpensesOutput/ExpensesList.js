//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import ExpenseItem from "./ٍExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet({
  containe: {},
});

export default ExpensesList;
