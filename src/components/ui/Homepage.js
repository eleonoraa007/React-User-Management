import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <nav>
      <NavLink to="/auth/register">Register</NavLink>
      <NavLink to="/auth/login">Login</NavLink>
    </nav>
  );
};

export default Homepage;
