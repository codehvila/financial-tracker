import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    addDocument({ uid: uid.uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

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
      {response.error && <p>{response.error}</p>}
    </>
  );
}
