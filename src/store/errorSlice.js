import {createSlice} from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: 'preloaderSlice',
  initialState:{
    error: '',
  },
  reducers:{
    errorOn:(state,action)=>{
      state.error = action.payload;
    },
    errorOff:(state)=>{
      state.error = '';
    },
  }
})

export const {errorOn,errorOff} = errorSlice.actions;

export default errorSlice.reducer;