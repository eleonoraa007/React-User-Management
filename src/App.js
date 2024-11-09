import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PropContext } from "./context/PropContext";
import Navbar from "./components/ui/NavBar";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AuthRoutes from "./routes/AuthRoutes";

const App = () => {
  const { token, userRole, logout } = useContext(PropContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <>
      {!token ? (
        <AuthRoutes />
      ) : (
        <>
          <Navbar />
          <UserRoutes />
          {userRole === "admin" && <AdminRoutes />}
          <button className="logout-btn btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </>
  );
};
export default App;
