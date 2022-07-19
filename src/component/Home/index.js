import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState("");

  const getPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  console.log(posts);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="sectionPost"> 
      <div className="posts">
        {posts
          ? posts.map((element, i) => {
              return <div> <h1>hhh</h1></div>;
            })
          : []}
          </div>
      </section>
    </div>
  );
};

export default Home;
