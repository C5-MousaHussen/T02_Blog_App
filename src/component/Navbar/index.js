import React, { useState } from "react";
import {  useNavigate } from "react-router";

const Navbar = () => {
const history = useNavigate()

const [name,setName] = useState(localStorage.getItem("name")||'')

const logout = ()=>{
  history("/")
  localStorage.clear()
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="home">
                Posts 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="users">
                Users
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <h1 className="form-control mr-sm-2">{name}</h1>
        
          </form>
          <button type="button" className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
      </nav>
    </div>
  );
};


export default Navbar