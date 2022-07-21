import { createSlice } from "@reduxjs/toolkit";

export const posts = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPosts: (state, action) => {
      state.posts.unshift(action.payload);
    },
    updatePosts:(state,action)=>{
      console.log(state.posts);
        state.posts=state.posts.map((element)=>{
            if(element.id == action.payload.id){
                return action.payload
            }
            return element
        })
    },
    deletPosts: (state,action)=>{
      console.log(action.payload);
        state.posts = state.posts.filter((element)=>{
            return element.id !== action.payload
        })
    }
  },
});


export const { setPosts, addPosts, updatePosts, deletePosts } = posts.actions;

export default posts.reducer;