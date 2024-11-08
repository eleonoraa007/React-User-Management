import { useContext, useEffect, useState } from "react";
import userApi from "../../service/userApi";
import { PropContext } from "../../context/PropContext";

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
        <>
          <p>
            <strong>First Name:</strong>
            {user.firstName}
          </p>
        </>
      )}
    </div>
  );
};

export default UserDisplay;

//   <p>
//     <strong>Last Name:</strong>
//     {user.lastName}
//   </p>
//   <p>
//     <strong>Email:</strong>
//     {user.email}
//   </p>
//   <p>
//     <strong>Birth date:</strong>
//     {user.birthDate}
//   </p>
//   <p>
//     {user.profileImage && (
//       <>
//         <strong>Profile image:</strong>
//         <img src={user.profileImage} alt={`${user.firstName}`} />
//       </>
//     )}
//   </p>
