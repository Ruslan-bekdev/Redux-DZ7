import {createSlice} from "@reduxjs/toolkit";

const preloaderSlice = createSlice({
  name: 'preloaderSlice',
  initialState:{
    preloader:false,
  },
  reducers:{
    preloaderOn:(state)=>{
      state.preloader = true;
    },
    preloaderOff:(state)=>{
      state.preloader = false;
    },
  }
})

export const {preloaderOn,preloaderOff} = preloaderSlice.actions;

export default preloaderSlice.reducer;