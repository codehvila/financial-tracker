import { useReducer, useEffect, useState } from "react";
import {
  db,
  Timestamp,
  doc,
  addDoc,
  deleteDoc,
  collection,
} from "../firebase/firebase.config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        document: null,
        success: false,
        error: null,
      };

    case "ADDED_DOCUMENT":
      return {
        ...state,
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };

    case "DELETED_DOCUMENT":
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      };

    case "ERROR":
      return {
        ...state,
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = Timestamp.fromDate(new Date());
      const docObjToAdd = {
        ...doc,
        createdAt,
      };
      const ref = collection(db, collectionName);
      await addDoc(ref, docObjToAdd);
      // const ref = await addDoc(collection(db, collectionName), {
      //   ...doc,
      //   createdAt,
      // });

      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: docObjToAdd,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const ref = doc(db, collectionName, id);
      await deleteDoc(ref);
      dispatchIfNotCancelled({
        type: "DELETED_DOCUMENT",
      });
    } catch (error) {
      console.error(error);
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: "Can't delete document!",
      });
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
