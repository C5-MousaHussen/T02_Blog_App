import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import "./style.css";

const Home = () => {

  const [crposts, setCrPosts] = useState("");
  const [ id, setId] = useState(localStorage.getItem("id"))

  const [posts, setPosts] = useState("");
  const [comments, setComments] = useState("");
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

  const getComments = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => {
        setComments(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const addpost = ()=>{
    axios.post("https://jsonplaceholder.typicode.com/posts",{crposts,id})
  }

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <div>
      <Navbar />
      
      <section className="sectionPost">
      <div className="addPost">
        <textarea onChange={(e)=>{
         setCrPosts(e.target.value)
        }} placeholder="Add post"/>
        <button type="button" className="btn btn-light" onClick={addpost}>Add</button>
      </div>
        <div className="posts">
          {posts
            ? posts.map((element, i) => {
                return (
                  <div key={i} className="postsDiv">
                    {" "}
                    <h3>User Id {element.userId}</h3>
                    <h4>{element.title}</h4>
                    <p>{element.body}</p>
                    <h5>Comments:</h5>
                    <div>
                      {comments
                        ? comments.map((comment, index) => {
                            return (
                              
                              <div key={index}> 
                                {element.id === comment.postId ? (
                                  <div className="comment">{comment.body}</div>
                                ) : (
                                  []
                                )}
                              </div>
                            );
                          })
                        : []}
                    </div>
                  </div>
                );
              })
            : []}
        </div>
      </section>
    </div>
  );
};

export default Home;
