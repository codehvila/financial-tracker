import { useState } from "react";
import {
  projectAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase/firebase.config";

export function useSignup() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);

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
      // console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup!");
      }

      updateProfile(projectAuth.currentUser, { displayName })
        .then(() => {
          // console.log("User profile updated!");
          // console.log("Display Name: ", projectAuth.currentUser.displayName);
          setIsPending(false);
          setErrorMessage(null);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          // console.log("An error occured updating user profile: ", err.message);
          setIsPending(false);
        });
    } catch (err) {
      // console.log("Try Catch Error: ", err.message);
      setErrorMessage(err.message);
      setIsPending(false);
    }
  };

  return { errorMessage, isPending, signup };
}
