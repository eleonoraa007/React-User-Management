import { useContext, useState } from "react";
import authApi from "../../service/authApi";
import { PropContext } from "../../context/PropContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setToken, setUserRole } = useContext(PropContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.login({ email, password });

      const token = response.data.token;
      const role = response.data.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      setToken(token);
      setUserRole(role);

      navigate("/users/profile");

      setMessage("Login successful");
    } catch (err) {
      setMessage(err.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email:"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password:"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
