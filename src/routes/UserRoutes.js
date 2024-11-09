import { Route, Routes } from "react-router-dom";
import PasswordUpdate from "../components/user/PasswordUpdate";
import UserDisplay from "../components/user/UserDisplay";
import UserUpdate from "../components/user/UserUpdate";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/users/profile" element={<UserDisplay />} />
      <Route path="/users/profile/update" element={<UserUpdate />} />
      <Route path="/users/profile/password" element={<PasswordUpdate />} />
    </Routes>
  );
};

export default UserRoutes;
