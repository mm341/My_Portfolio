import React from "react";
import "./Works.css";
import bootstrap from "../../imgs/bootstrapicon.png";
import js from "../../imgs/javascript_logo.png";
import css from "../../imgs/download.png";
import html from "../../imgs/logo-2582748_640.png";
import reacticon from "../../imgs/React-icon.svg.png"
import { motion } from "framer-motion";
import {Link} from 'react-scroll';
import { useSelector } from "react-redux";


const Works = () => {
  // context
  const {mode}=useSelector((state)=>state.darkMode);

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: mode ? "white" : "" }}>
             Using All these
          </span>
          <span>React & Redux_ToolKit</span>
          <spane>
           Training with Creatievo Center 
            <br />
            Self stydy with Youtube Channels
            <br />
            Training in using modern techniques
            <br />
            solving problems
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={reacticon} alt="" />
            
          </div>
          <div className="w-secCircle">
            <img src={bootstrap} alt="" />
           
          </div>
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;