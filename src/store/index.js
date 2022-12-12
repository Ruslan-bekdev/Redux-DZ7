import {configureStore} from "@reduxjs/toolkit";
import postsReducer from './postsSlice';
import preloaderReducer from "./preloaderSlice";
import errorReducer from "./errorSlice";

export default configureStore({
  reducer:{
    postsReducer,
    preloaderReducer,
    errorReducer,
  }
})