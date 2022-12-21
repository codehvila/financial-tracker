import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setErrorMessage(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setIsPending(false);
        setErrorMessage(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setErrorMessage(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);
  return { errorMessage, isPending, logout };
}
