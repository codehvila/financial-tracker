import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errorMessage, isPending, login } = useLogin();

  const handleLogin = (event) => {
    event.preventDefault();
    login(email, password);
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
        {!isPending && <button className="btn">Login</button>}
        {isPending && <button disabled>Login ...</button>}
        {errorMessage && (
          <div className="error">
            Error: <br />
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
