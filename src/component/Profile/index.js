import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Navbar from "../Navbar/index";

const Profile = () => {
  const [myProfile, setMyprofile] = useState("");
  
  const id  = JSON.parse(localStorage.getItem("id"));

  console.log(id);
  const getUserById = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((result) => {
        console.log(result);
        setMyprofile(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getUserById();
  }, []);

  console.log(myProfile);

  return (
    <div>
        <Navbar/>
      {myProfile
        ? myProfile.map((element, i) => {
            return (
              <div key={i}>
                <div className="card border-dark mb-3">
                  <div className="card-header">{element.name}</div>
                  <div className="card-body text-dark">
                    <h5 className="card-title">{element.website}</h5>
                    <p className="card-text">{element.username}</p>
                    <p className="card-text">{element.phone}</p>
                    <p className="card-text">{element.email}</p>
                    <p className="card-text">{element.company.name}</p>
                  </div>
                </div>
              </div>
            );
          })
        : []}
    </div>
  );
};

export default Profile;
