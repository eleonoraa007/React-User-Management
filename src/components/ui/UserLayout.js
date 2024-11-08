import { NavLink, Route, Routes } from "react-router-dom";
import PasswordUpdate from "../user/PasswordUpdate";
import UserDisplay from "../user/UserDisplay";
import UserUpdate from "../user/UserUpdate";

const UserLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/users/profile">User Profile</NavLink>
        <NavLink to="/users/profile/update">Update Profile</NavLink>
        <NavLink to="/users/profile/password">Update Password</NavLink>
      </nav>
      <Routes>
        <Route path="/users/profile" element={<UserDisplay />} />
        <Route path="/users/profile/update" element={<UserUpdate />} />
        <Route path="/users/profile/password" element={<PasswordUpdate />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
