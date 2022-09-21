import React from "react";

export const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`}>
      <b>{text}</b>
    </div>
  );
};
