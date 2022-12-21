import { useState } from "react";
import { projectAuth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setErrorMessage(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setErrorMessage(null);
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message);
      setIsPending(false);
    }
  };
  return { errorMessage, isPending, logout };
}
