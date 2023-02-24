import { useState, useEffect, useRef } from "react";
import {
  onSnapshot,
  collection,
  db,
  query,
  where,
  orderBy,
} from "../firebase/firebase.config";

export function useCollection(collectionName, _query, _orderBy) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const { current: q } = useRef(_query);
  const { current: o } = useRef(_orderBy);

  useEffect(() => {
    let ref = collection(db, collectionName);

    if (q && o) {
      ref = query(collection(db, collectionName), where(...q), orderBy(...o));
    } else if (q) {
      ref = query(collection(db, collectionName), where(...q));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.error("Error: ", error);
        setError("Could not fetch the data!");
      }
    );

    return () => unsubscribe();
  }, [collectionName, q, o]);

  return { documents, error };
}
