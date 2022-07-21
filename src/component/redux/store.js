import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";

import posts from "./reducers/posts";

export default configureStore({
  reducer: {
    auth: auth,
    posts: posts,
  },
});
