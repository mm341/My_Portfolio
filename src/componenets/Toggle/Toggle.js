import React from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../features/IconSlice";


const Toggle = () => {
  const {mode}=useSelector((state)=>state.darkMode);
  console.log(mode);
  const dispatch=useDispatch();
  return (
    <div className="toggle" onClick={()=>{dispatch(changeState())}}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={mode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;