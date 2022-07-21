import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router";
import {toLogout} from "../redux/reducers/auth"
const Navbar = () => {

  //Navigate
const history = useNavigate()

  //Dispatch
  const dispatch = useDispatch()

const nam = JSON.parse(localStorage.getItem("name"));

const id  = JSON.parse(localStorage.getItem("id"));

const [name,setName] =useState (nam||'')

const logout = ()=>{
  dispatch(toLogout());
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
              <a className="nav-link" href="/home">
                Posts 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">
                Users
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button onClick={()=>{
              history(`/profile/${id}`)
            }} className="form-control mr-sm-2">{name}</button>
        
          </form>
          <button type="button" className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
      </nav>
    </div>
  );
};


export default Navbar