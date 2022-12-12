import {createAsyncThunk} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {preloaderOn,preloaderOff} from "./preloaderSlice";
import {errorOn,errorOff} from "./errorSlice";

export const getPosts = createAsyncThunk(
  'getPosts',
  async (data, {dispatch,rejectedWithValue}) => {
    dispatch(preloaderOn());
    dispatch(errorOff());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      switch (response.status) {
        case 200: {
          dispatch(postsInfo(await response.json()));
          dispatch(preloaderOff());
      } break;
        case 404: throw Error(`${response.status}: Неправильный запрос`);
        case 400: throw Error(`${response.status}: Пользователь не авторизован`);
      }
    }
    catch (e) {
      dispatch(errorOn(e.message));
      dispatch(preloaderOff());
    }
  }
);

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState:{
    posts:[],
    post:{},
  },
  reducers:{
    postsInfo:(state, action)=>{
      state.posts = action.payload;
    },
    onePostInfo:(state, action)=>{
      state.post = action.payload;
    },
  },
});

export const {postsInfo,onePostInfo} = postsSlice.actions;

export default postsSlice.reducer;