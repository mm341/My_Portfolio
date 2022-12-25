import { createSlice} from '@reduxjs/toolkit';
import { json } from 'react-router-dom';


export const IconSlice = createSlice({
  name: 'darkMode',
  initialState:{
    mode:  JSON.parse(localStorage.getItem("darkmode"))|| false,
  },
  reducers: {
    changeState :(state)=>{
      state.mode=!state.mode;
      localStorage.setItem("darkmode",JSON.stringify(state.mode));
    },
    }
});

export const {changeState} = IconSlice.actions;

export default IconSlice.reducer;