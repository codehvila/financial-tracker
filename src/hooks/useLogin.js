import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setErrorMessage(null);
    setIsPending(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (!res) {
          throw new Error("Could not complete sign in!");
        }

        dispatch({ type: "LOGIN", payload: res.user });

        if (!isCancelled) {
          setErrorMessage(null);
          setIsPending(false);
        }
      })
      .catch((err) => {
        console.log("Error: ", err.message);

        if (!isCancelled) {
          console.log("Login code error: ", err.code);
          console.log("Login message error: ", err.message);
          setErrorMessage(err.message);
          setIsPending(false);
        }
      });
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { login, errorMessage, isPending };
};
