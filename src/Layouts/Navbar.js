import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <NavLink class="navbar-brand" href="#">CRUD</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to={"/"} class="nav-link active" aria-current="page">Home</Link>
        <Link to={"/contact"} class="nav-link active" >Contact</Link>
        <Link to={"/about"} class="nav-link active" >About</Link>
        <Link to={"/users/add"} className="btn ">
          Add user
        </Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar