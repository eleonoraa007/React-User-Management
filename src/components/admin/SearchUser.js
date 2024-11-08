import { useState } from "react";
import adminApi from "../../service/adminApi";

const SearchUser = ({ token }) => {
  const [query, setQuery] = useState({
    email: "",
    birthDate: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const data = await adminApi.searchUser(token, query);
      console.log("API response data:", data);
      setResult(data || null);
      setError("");
    } catch (err) {
      setError("User not found");
    }
  };

  return (
    <div>
      <h2>Search User</h2>
      <input
        type="email"
        name="email"
        placeholder="Search user by email"
        value={query.email}
        onChange={handleChange}
      />
      <input
        type="date"
        name="birthDate"
        placeholder="Search by birth date"
        value={query.birthDate}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      {result && result.length > 0 ? (
        result.map((user, index) => <p key={index}>Found: {user.firstName}</p>)
      ) : (
        <p>{error || "No user found"}</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchUser;
