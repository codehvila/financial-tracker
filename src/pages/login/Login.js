import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin} className={styles["login-form"]}>
        <h1>Login</h1>
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
        <button>Login</button>
      </form>
    </div>
  );
}
