import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import styles from "./Home.module.css";

export default function Home() {
  const [orderBy, setOrderBy] = useState(["createdAt", "desc"]);
  const { user } = useAuthContext();

  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    orderBy
  );

  const handleOrder = () => {
    switch (orderBy[1]) {
      case "desc":
        setOrderBy(["createdAt", "asc"]);

        break;
      case "asc":
        setOrderBy(["createdAt", "desc"]);

        break;
      default:
        setOrderBy(["createdAt", "desc"]);

        break;
    }
  };

  return (
    <>
      <div className={styles.title}>Home Finance Tracker</div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>transaction list</h3>

          {error && <p>{error}</p>}
          {documents && orderBy && (
            <div
              onClick={handleOrder}
              style={{ textAlign: "left", cursor: "pointer" }}
            >
              {orderBy[1] === "desc" ? <span>↓</span> : <span>↑</span>}
            </div>
          )}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user} />
        </div>
      </div>
    </>
  );
}
