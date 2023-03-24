import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  const { user } = useSelector((state) => ({ ...state.user }));
  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(logoutInitiate());
  };

  return (
    <div className="header">
      <Link to="/">
        <p className="logo">Contact App</p>
      </Link>

      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
          <p
            className={`${activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("AddContact")}
          >
            Add Contact
          </p>

          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
        {user ? (
          <p style={{ cursor: "pointer" }} onClick={handleAuth}>
            Sign Out
          </p>
        ) : (
          <p
            className={`${activeTab === "SignIn" ? "active" : ""}`}
            onClick={() => setActiveTab("SignIn")}
          >
            Sign In
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
