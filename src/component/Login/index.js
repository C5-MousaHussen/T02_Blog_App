import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {toLogin} from "../redux/reducers/auth"
import "./style.css";

const Login = () => {

// Dispatch
const dispatch = useDispatch();

  const [users, setUsers] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessag] = useState("");

  const history = useNavigate();

  const accessUser = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?username=${name}&email=${email}`
      )
      .then((result) => {
        dispatch(toLogin(result.data.id));

        setUsers(result.data);
        if (result.data.length) {
          history("/home");
          localStorage.setItem("id", JSON.stringify(result.data.name));
          localStorage.setItem("name", JSON.stringify(result.data[0].name));
          localStorage.setItem("id", JSON.stringify(result.data[0].id));

          return;
        } else if (name.length && email.length) {
          setMessag("User not found");
          return;
        } else {
          setMessag("");
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    accessUser();
  }, []);

  return (
    <div className="contanierLogin">
      <div className="middleLogin">
        <section className="sectionLogin">
          <h1>Blog Login</h1>
          <input
            placeholder="User Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              accessUser();
            }}
          >
            Button
          </button>
          <p>{message}</p>
        </section>
      </div>
    </div>
  );
};

export default Login;
