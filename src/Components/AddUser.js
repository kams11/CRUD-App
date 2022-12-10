import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    navigate("/");
  };

  return (
    <>
    <div className="container" style={{paddingTop:"10px"}}>
      <div class="mb-3">
        <h2 className="text-center mb-4">Add a User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <button className="btn btn-success ">Add User</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUser;