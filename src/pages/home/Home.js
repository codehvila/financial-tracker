import TransactionForm from "./TransactionForm";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.title}>Home Finance Tracker</div>
      <div className={styles.container}>
        <div className={styles.content}>transaction list</div>
        <div className={styles.sidebar}>
          <TransactionForm />
        </div>
      </div>
    </>
  );
}
