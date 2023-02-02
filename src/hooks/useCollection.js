import { useState, useEffect } from "react";
import { onSnapshot, collection, db } from "../firebase/firebase.config";

export function useCollection(collectionName) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
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
  }, [collectionName]);

  return { documents, error };
}
