import { useContext, useEffect, useState } from "react";
import userApi from "../../service/userApi";
import { PropContext } from "../../context/PropContext";
import styles from "./UserDisplay.module.css";

const UserDisplay = () => {
  const { token } = useContext(PropContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await userApi.getProfile(token);
        setUser(data);
        setError("");
      } catch (err) {
        setError("Error fetching profile");
      }
    };
    fetchUser();
  }, [token]);

  return (
    <div>
      <h2>User Profile:</h2>
      {error && <p>{error}</p>}
      {user && (
        <div className={styles.profile}>
          <img
            src={user.profileImage || "https://via.placeholder.com/150"}
            alt={`${user.firstName}`}
          />
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Birth date: {new Date(user.birthDate).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default UserDisplay;
