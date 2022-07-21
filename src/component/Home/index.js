import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useDispatch,useSelector  } from "react-redux";
import "./style.css";

import {addPosts ,deletePosts,setPosts, updatePosts} from "../redux/reducers/posts"

const Home = () => {

//Dispatch
const dispatch = useDispatch()

  const [crposts, setCrPosts] = useState("");
  const [id, setId] = useState(localStorage.getItem("id"));


  const [comments, setComments] = useState("");

const {posts} = useSelector((state)=>{
  return {
    posts:state.posts.posts
  }
})

  const getPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        dispatch(setPosts(result.data.reverse()));
       /*  setPosts(result.data); */
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

  const addpost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        dispatch(addPosts(crposts));
      })
      .catch((err) => {
        throw err;
      });
  };


  // delete post
  const deletePost = (id)=>{
    console.log(id)
   dispatch(deletePosts(id))
  }

  //edit post
  const editPost = (id)=>{
    console.log(id);
dispatch(updatePosts(id))
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
          <textarea
            onChange={(e) => {
              setCrPosts(e.target.value);
            }}
            placeholder="Add post"
          />
          <button type="button" className="btn btn-light" onClick={addpost}>
            Add
          </button>
        </div>
        <div className="posts">
          {posts
            ? posts.map((element, i) => {
                return (
                  <div key={i} className="postsDiv">
                    {" "}
                    <div>
                      <button onClick={()=>{editPost(element.id)}}><svg  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></button>


                      <button className="delete" onClick={()=>{
                        deletePost(element.id)
                      }}>
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                    
                    </div>
                    
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
