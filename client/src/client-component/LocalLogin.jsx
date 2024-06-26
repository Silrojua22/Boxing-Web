import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginLocal } from "../redux/userLocalActions";

const LocalLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (userData) {
      dispatch(loginLocal(userData?.email, userData?.password));
    } else {
      alert("El email o la contraseña no coincide");
    }
  };
  return (
    <div>
      <h1>Local Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LocalLogin;
