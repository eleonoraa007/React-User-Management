import { useContext } from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLayout from "./components/ui/AdminLayout";
import UserLayout from "./components/ui/UserLayout";
import Homepage from "./components/ui/Homepage";
import { PropContext } from "./context/PropContext";

function App() {
  const { token, userRole, logout } = useContext(PropContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <>
      {!token ? (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      ) : (
        <>
          {userRole === "admin" ? <AdminLayout /> : <UserLayout />}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
}
export default App;
