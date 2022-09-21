import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ExpenseItem({ expense, deleteItem, editItem }) {
  const { id, charge, amount } = expense;

  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div className="item-button">
          <button
            className="edit-btn"
            aria-label="edit-button"
            onClick={() => editItem(id)}
          >
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            aria-label="delete-button"
            onClick={() => deleteItem(id)}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
}
