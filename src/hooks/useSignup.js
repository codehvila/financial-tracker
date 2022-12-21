import { useState, useEffect } from "react";
import {
  projectAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase/firebase.config";

import { useAuthContext } from "./useAuthContext";

export function useSignup() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setErrorMessage(null);
    setIsPending(true);

    projectAuth.languageCode = "es";

    try {
      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup!");
      }

      updateProfile(projectAuth.currentUser, { displayName })
        .then(() => {
          dispatch({ type: "LOGIN", payload: res.user });

          if (!isCancelled) {
            // console.log("User profile updated!");
            // console.log("Display Name: ", projectAuth.currentUser.displayName);
            setIsPending(false);
            setErrorMessage(null);
          }
        })
        .catch((err) => {
          if (!isCancelled) {
            // console.log("An error occured updating user profile: ", err.message);
            setErrorMessage(err.message);
            setIsPending(false);
          }
        });
    } catch (err) {
      if (!isCancelled) {
        console.log("Try Catch Error Code: ", err.code);
        console.log("Try Catch Error Message: ", err.message);
        setErrorMessage(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { errorMessage, isPending, signup };
}
