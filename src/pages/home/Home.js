import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import styles from "./Home.module.css";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions");

  return (
    <>
      <div className={styles.title}>Home Finance Tracker</div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>transaction list</h3>

          {error && <p>error</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user} />
        </div>
      </div>
    </>
  );
}
