import { useEffect, useState } from "react";
import adminApi from "../../service/adminApi";

const UserList = ({ token }) => {
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
    <div>
      <h2>User list:</h2>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <strong>First Name:</strong>
              {user.firstName}
            </p>
            <p>
              <strong>Last Name:</strong>
              {user.lastName}
            </p>
            <p>
              <strong>Email:</strong>
              {user.email}
            </p>
            <p>
              <strong>Birth date:</strong>
              {user.birthDate}
            </p>
            <p>
              {user.profileImage && (
                <>
                  <strong>Profile image:</strong>
                  <img src={user.profileImage} alt={`${user.firstName}`} />
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
