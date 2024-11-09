import { Route, Routes } from "react-router-dom";
import UserList from "../components/admin/UserList";
import SearchUser from "../components/admin/SearchUser";
import DeleteUser from "../components/admin/DeleteUser";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/" element={<UserList />} />
      <Route path="/admin/search" element={<SearchUser />} />
      <Route path="/admin/:id" element={<DeleteUser />} />
    </Routes>
  );
};

export default AdminRoutes;
