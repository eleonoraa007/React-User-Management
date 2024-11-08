import { NavLink, Route, Routes } from "react-router-dom";
import UserList from "../admin/UserList";
import SearchUser from "../admin/SearchUser";
import DeleteUser from "../admin/DeleteUser";
import UserLayout from "./UserLayout";

const AdminLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/admin/">User list</NavLink>
        <NavLink to="/admin/search">Search user</NavLink>
        <NavLink to="/admin/:id">Search user</NavLink>
        <UserLayout />
      </nav>
      <Routes>
        <Route path="/admin/" element={<UserList />} />
        <Route path="/admin/search" element={<SearchUser />} />
        <Route path="/admin/:id" element={<DeleteUser />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
