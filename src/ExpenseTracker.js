import React, { useState } from "react";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [expenseLabel, setExpenseLabel] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      label: expenseLabel,
      cost: expenseCost
    };
    setExpenses([...expenses, newExpense]);
    setExpenseLabel("");
    setExpenseCost("");
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
    <div className="expense-tracker-container">
      <h2>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="expenseLabel">Expense Label:</label>
          <input
            type="text"
            id="expenseLabel"
            value={expenseLabel}
            onChange={(event) => setExpenseLabel(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expenseCost">Expense Cost:</label>
          <input
            type="number"
            id="expenseCost"
            value={expenseCost}
            onChange={(event) => setExpenseCost(event.target.value)}
          />
        </div>
        <button type="submit" className="btn-add-expense">
          Add Expense
        </button>
      </form>
      <h3>Expenses:</h3>
      {expenses.length > 0 && (
        <div className="expenses-list">
          {expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <span className="expense-label">{expense.label}</span>
              <span className="expense-cost">${expense.cost}</span>
              <button
                className="btn-delete-expense"
                onClick={() => handleDeleteExpense(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseTracker;
