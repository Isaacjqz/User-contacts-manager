import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db as firebaseDB } from "../firebase";
import { toast } from "react-toastify";
import "./AddEdit.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
  status: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, contact, status } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
  }, [id, data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !contact || !status) {
      toast.error("Please provide valid information!");
    } else {
      if (!id) {
        firebaseDB.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact added successfully");
          }
        });
      } else {
        firebaseDB.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact Updated successfully");
          }
        });
      }

      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact Number"
          value={contact || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          id="status"
          name="status"
          placeholder="Status"
          value={status || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddEdit;
