// import ExpenseItem from "./Component/ExpenseItem";
import "./Component/Expenses/Expenses.css";
import NewExpenses from "./Component/NewExpenses/NewExpenses";
import Expenses from "./Component/Expenses/Expenses";
import React, { useState } from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "new york",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "honolulu",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "london",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "india",
    },
  ];
  console.log(expenses[0]);
  const [updateState, setUpdateState] = useState(expenses);
  const NewExp = (expenComingFromChild) => {
    setUpdateState([ expenComingFromChild,...updateState]);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "lets go started"),
  //   React.createElement(Expenses,{expenses: expenses})
  // );
  return (
    <div>
      <NewExpenses new = {NewExp} />
      <Expenses expenses = {updateState} />
    </div>
  );
};
export default App;
