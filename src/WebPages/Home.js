import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUsers(result.data.reverse());
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUser();
  };

  return (
    <div className="container">
      <div >
        <h1 style={{color:"blue"}}>Home page</h1>

        <table className="table border shadow">
          <thead class="table-primary">
            <tr>
              <th scope="col">Slno.</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-primary me-2"
                  >
                    view
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn btn-outline-primary me-2"
                  >
                    edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;