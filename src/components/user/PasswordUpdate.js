import { useContext, useState } from "react";
import userApi from "../../service/userApi";
import { PropContext } from "../../context/PropContext";

const PasswordUpdate = () => {
  const { token } = useContext(PropContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userApi.updatePassword(token, currentPassword, newPassword);
      setMessage("Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setMessage("Error updating password");
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Update password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordUpdate;
