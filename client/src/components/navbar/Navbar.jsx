import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    dispatch({ type: "LOGOUT" });

    try {
      await axios.post("/auth/logout", { message: "logged out successfully" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Bookinz</span>
        </Link>
        {user ? (
          <div className="user">
            <div className="user">
              <img
                src={
                  user.img
                    ? user.img
                    : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="
                }
                className="user-img"
              />
              <p>{user.username}</p>
            </div>
            <button onClick={handleLogout} className="user userListItem active">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
