import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();

  const logout = () => {
    if (user) {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    }
  };

  return (
    <nav>
      <div>{(user ? user.email : "Not logged in")}</div>
      <hr />
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to='/'>Landing page</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
      <button onClick={logout}>logout</button>
    </nav>
  );
};
    