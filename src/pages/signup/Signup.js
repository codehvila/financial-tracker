import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, errorMessage } = useSignup();

  const handleSignup = (event) => {
    event.preventDefault();
    // console.log("email: ", email);
    // console.log("password: ", password);
    // console.log("display name: ", displayName);
    signup(email, password, displayName);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <form onSubmit={handleSignup} className={styles["signup-form"]}>
          <h1>Signup</h1>
          <label>
            <span>Name</span>
            <input
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          {!isPending && <button>Signup</button>}
          {isPending && <button disabled>Signuping</button>}
          {errorMessage && (
            <div className="error">
              Error: <br />
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
