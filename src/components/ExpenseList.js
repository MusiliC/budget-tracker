import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export default function ExpenseList({ expenses, clearAll, deleteItem, editItem }) {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => (
          <Item
            key={expense.id}
            expense={expense}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>

      {expenses.length > 0 && (
        <button
          type="button"
          className="btn btn-outline-danger btn-total"
          onClick={clearAll}
        >
          <b> Clear Expenses</b> <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
}
