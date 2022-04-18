import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "shoes",
    amount: 50,
    date: new Date("2021-12-12"),
  },
  {
    id: "e2",
    description: "shoes",
    amount: 50,
    date: new Date("2021-12-12"),
  },
  {
    id: "e3",
    description: "shoes",
    amount: 50,
    date: new Date("2021-12-12"),
  },
];

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.expense]; // [...state, action.expense] means add the expense to the state rest of the array and return  the new state
    case "DELETE":
      return state.filter((expense) => expense.id !== action.id);
    case "UPDATE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
}

function ExpensesContextProvider(children) {
  const [expenses, dispatch] = useReducer(expensesReducer, []);

  function addExpense({ description, amount, date }) {
    dispatch({
      type: "ADD",
      expense: {
        id: Math.random().toString(),
        description,
        amount,
        date,
      },
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: "DELETE",
      id,
    });
  }

  function updateExpense(id, updates) {
    dispatch({
      type: "UPDATE",
      id,
      updates,
    });
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
