import React, { useEffect, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions";
import UserRoute from "./components/UserRoute";
import Header from "./components/Header";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top_center" />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          {/* Protected routes  */}
          <Route element={<UserRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/addContact" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
