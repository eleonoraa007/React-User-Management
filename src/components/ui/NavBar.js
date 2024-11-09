import { useContext } from "react";
import { PropContext } from "../../context/PropContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { userRole } = useContext(PropContext);
  return (
    <nav>
      <NavLink to="/users/profile">User Profile</NavLink>
      <NavLink to="/users/profile/update">Update Profile</NavLink>
      <NavLink to="/users/profile/password">Update Password</NavLink>

      {userRole === "admin" && (
        <>
          <NavLink to="/admin/">User list</NavLink>
          <NavLink to="/admin/search">Search user</NavLink>
          <NavLink to="/admin/:id">Delete user</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
