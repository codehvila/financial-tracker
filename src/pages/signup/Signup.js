import { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("display name: ", displayName);
  };

  return (
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
        <button>Signup</button>
      </form>
    </div>
  );
}
