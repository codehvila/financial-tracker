import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">Finance Tracker</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button onClick={logout} className="btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
