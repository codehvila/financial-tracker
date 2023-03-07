import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul className={styles.transactions}>
      {transactions &&
        transactions.map((doc) => (
          <li key={doc.id}>
            <p className={styles.date}>
              {new Intl.DateTimeFormat("es-ES").format(
                new Date(doc.createdAt.toDate())
              )}
            </p>
            <p className={styles.name}>{doc.name}</p>
            <p className={styles.amount}>{doc.amount}$</p>
            <button onClick={() => deleteDocument(doc.id)}>X</button>
          </li>
        ))}
    </ul>
  );
}
