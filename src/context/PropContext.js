import { createContext, useEffect, useState } from "react";

export const PropContext = createContext();

export const PropProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    if (userRole) {
      localStorage.setItem("role", userRole);
    } else {
      localStorage.removeItem("role");
    }
  }, [token, userRole]);

  const logout = (navigate) => {
    setToken("");
    setUserRole("");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <PropContext.Provider
      value={{ token, setToken, userRole, setUserRole, logout }}
    >
      {children}
    </PropContext.Provider>
  );
};
