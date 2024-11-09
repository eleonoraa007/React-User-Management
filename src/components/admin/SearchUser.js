import { useContext, useState } from "react";
import adminApi from "../../service/adminApi";
import { PropContext } from "../../context/PropContext";

const SearchUser = () => {
  const { token } = useContext(PropContext);
  const [query, setQuery] = useState({
    email: "",
    birthDate: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await adminApi.searchUser(token, query);
      setResult(data || null);
      setError("");
    } catch (err) {
      setError("User not found");
    }
  };

  return (
    <div>
      <h2>Search User</h2>
      <form onSubmit={handleSearch}>
        <input
          type="email"
          name="email"
          placeholder="Search user by email"
          value={query.email}
          onChange={handleChange}
        />
        <label>Search by date of birth:</label>
        <input
          type="date"
          name="birthDate"
          placeholder="Search by birth date"
          value={query.birthDate}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {result &&
        result.length > 0 &&
        result.map((user, index) => <p key={index}>Found: {user.firstName}</p>)}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchUser;
