import React from "react";
import { MdSend } from "react-icons/md";

export default function ExpenseForm({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) {
  return (
    <>
      <form action="">
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge" className="form-label">
              Charge
            </label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="e.g. rent"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount " className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="e.g. 100"
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        <button type="button" className="btn btn-outline-danger" onClick={handleSubmit}>
          {
            edit ? "edit" : "Send"
          } <MdSend className="btn-icon" />
        </button>
      </form>
    </>
  );
}
