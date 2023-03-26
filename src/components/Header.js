import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const { currentUser: user } = useSelector((state) => ({ ...state.user }));
  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(logoutInitiate());
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/addContact") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/login") {
      setActiveTab("SignIn");
    }
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="header">
      <Link to="/">
        <p className="logo">My Contacts</p>
      </Link>
      <div className="header-right">
        <form onSubmit={handleSubmit} style={{ display: "inline" }}>
          <input
            type="text"
            className="inputField"
            placeholder="Search Contacts..."
            onChange={handleChange}
          />
        </form>
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>

        <Link to="/addContact">
          <p
            className={`${activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("AddContact")}
          >
            Add Contact
          </p>
        </Link>

        {user ? (
          <p style={{ cursor: "pointer" }} onClick={handleAuth}>
            Sign Out
          </p>
        ) : (
          <Link to="/login">
            <p
              className={`${activeTab === "SignIn" ? "active" : ""}`}
              onClick={() => setActiveTab("SignIn")}
            >
              Sign In
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
