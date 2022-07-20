import React, { useEffect, useState } from "react";
import "./style.css";

import Navbar from "../Navbar";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState("");

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div>
      <Navbar />
      <section className="sectionPost">
        <div className="posts">
          {users
            ? users.map((element, i) => {
                return (
                  <div key={i} className="postsDiv">
                    <h3>Name: {element.name}</h3>
                    <h4>Email: {element.email}</h4>
                    <h4> user name: {element.username}</h4>
                    <h4>Phone number: {element.phone}</h4>
                    <h5>company name: {element.company.name}</h5>
                    <p>Adress: {element.address.street}</p>
                  </div>
                );
              })
            : []}
        </div>
      </section>
    </div>
  );
};

export default Users;
