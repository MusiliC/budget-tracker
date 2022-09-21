import { Alert } from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import uuid from "react-uuid";
import { useState } from "react";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "Clothes", amount: 1000 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  //edit

  const [edit, setEdit] = useState(false)

  //edit item

  const [id, setId] = useState(0)

  //alert

  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuid(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
      handleAlert({ type: "success", text: "Item added.." });
    } else {
      handleAlert({
        type: "danger",
        text: "Charge should not be empty and amount less than 0..",
      });
    }
    console.log(charge, amount);
  };

  const clearAll = () => {
    console.log("items cleared");
    setExpenses([])
  };

  const deleteItem = (id) => {
    console.log(`item with the id ${id} deleted`);
    let tempExpenses = expenses.filter((item) => (
      item.id !== id
    ))
    setExpenses(tempExpenses)
        handleAlert({
          type: "danger",
          text: "Item deleted..",
        });
  };

  const editItem = (id) => {
    console.log(`item with the id ${id} Updated`);
    let expense = expenses.find(item => item.id ===id)
    let {charge, amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)

  };

  return (
    <div className="App">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <p className="title">Budget Calculator</p>
      <main className="mainApp">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit = { edit}
        />
        <ExpenseList
          expenses={expenses}
          clearAll={clearAll}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </main>
      <h3 className="spend">
        Total Spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc = acc + parseInt(curr.amount));
          }, 0)}
        </span>
      </h3>
    </div>
  );
}

export default App;
