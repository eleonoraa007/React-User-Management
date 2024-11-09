import { Route, Routes } from "react-router-dom";
import Homepage from "../components/ui/Homepage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;
