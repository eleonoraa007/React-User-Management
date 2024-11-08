import { useEffect, useState } from "react";
import UserList from "./components/admin/UserList";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DeleteUser from "./components/admin/DeleteUser";
import UserDisplay from "./components/user/UserDisplay";
import UserUpdate from "./components/user/UserUpdate";
import PasswordUpdate from "./components/user/PasswordUpdate";
import SearchUser from "./components/admin/SearchUser";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  return (
    <>
      <Register />
      <h1>Hello</h1>
      <Login setToken={setToken} />
      <h1>Hello</h1>

      {token && (
        <>
          <UserList token={token} />
          <DeleteUser token={token} />
          <SearchUser token={token} />
          <UserDisplay token={token} />
          <UserUpdate token={token} />
          <PasswordUpdate token={token} />
        </>
      )}
    </>
  );
}
export default App;
