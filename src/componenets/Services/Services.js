import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glasses from "../../imgs/glasses.png";
import { motion } from "framer-motion";
import Resume from './Mohamed mostafa frotend.pdf';
import { useSelector } from "react-redux";

const Services = () => {
  // state
  const {mode}=useSelector((state)=>state.darkMode);

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mo  de */}
        <span style={{ color: mode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
         Building web using modern techniques
          <br />
          solving problems
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
       
        <motion.div
          initial={{ left: "2rem", top: "12rem" }}
          whileInView={{ left: "25rem", bottom:"20rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript , Jquery , Reactjs , Bootstrap , Redux_ToolKit"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;