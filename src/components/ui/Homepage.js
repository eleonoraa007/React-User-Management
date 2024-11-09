import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the User Management App</h1>
      <NavLink className={styles.link} to="/auth/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/auth/login">
        Login
      </NavLink>
    </div>
  );
};

export default Homepage;
