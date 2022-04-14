//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description} </Text>;
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

// const styles = StyleSheet({
// });

export default ExpensesList;
