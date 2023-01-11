import { useState } from "react";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Transaction Form Data to submit: ", { name, amount });
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleOnSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            value={name}
          />
        </label>
        <label>
          <span>Amount (€):</span>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            required
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
