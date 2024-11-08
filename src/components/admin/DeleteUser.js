import { useState } from "react";
import adminApi from "../../service/adminApi";

const DeleteUser = ({ token }) => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      await adminApi.deleteUser(token, id);
      setMessage("User deleted");
    } catch (err) {
      setMessage("Error deleting user");
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="User id:"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete user</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteUser;
