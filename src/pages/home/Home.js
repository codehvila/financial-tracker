import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Home.module.css";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <>
      <div className={styles.title}>Home Finance Tracker</div>
      <div className={styles.container}>
        <div className={styles.content}>transaction list</div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user} />
        </div>
      </div>
    </>
  );
}
