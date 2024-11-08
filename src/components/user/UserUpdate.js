import { useState } from "react";
import userApi from "../../service/userApi";

const UserUpdate = ({ token }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userApi.updateProfile(token, formData);
      setMessage("User updated successfully");
    } catch (err) {
      setMessage("Error updating user");
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name:"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name:"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthDate"
          placeholder="Birth date:"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserUpdate;
