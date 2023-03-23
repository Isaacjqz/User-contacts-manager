import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutInitiate } from "../redux/actions";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <div>
      <h2>Welcome To Your Contacts</h2>
      <br />
      <Link to="/login">
        <button className="btn btn-danger" onClick={handleAuth}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Home;
