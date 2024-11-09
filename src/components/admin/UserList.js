import { useContext, useEffect, useState } from "react";
import adminApi from "../../service/adminApi";
import { PropContext } from "../../context/PropContext";
import styles from "./UserList.module.css";

const UserList = () => {
  const { token } = useContext(PropContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await adminApi.getAllUsers(token);
        setUsers(data);
        setError("");
      } catch (err) {
        setError("Error fetching users");
      }
    };
    fetchUsers();
  }, [token]);
  return (
    <div className={styles.listContainer}>
      <h2>User list:</h2>
      {error && <p>{error}</p>}
      <div className={styles.cardList}>
        {users.map((user) => (
          <div className={styles.card} key={user.id}>
            <img
              src={user.profileImage || "https://via.placeholder.com/150"}
              alt={`${user.firstName}`}
              className={styles.image}
            />
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Birth date: {new Date(user.birthDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
