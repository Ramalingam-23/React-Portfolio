import React, { useContext } from "react";
import "./Works.css";
import Nptel from "../../img/nptel.png";
import Ibm from "../../img/ibm.png";
import Info from "../../img/info.png";
import Skilledge from "../../img/skilledge.png";
import Web from "../../img/web.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Completed Certificates
          </span>
          <span>From Brands & Clients</span>
          {/* <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane> */}
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

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
            <img src={Nptel} alt="" height={130} width={160}/>
          </div>
          <div className="w-secCircle">
            <img src={Ibm} alt="" height={120} width={160}/>
          </div>
          <div className="w-secCircle">
            <img src={Info} alt="" height={200} width={220}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Skilledge} alt="" height={120} width={160}/>
          </div>
          <div className="w-secCircle">
            <img src={Web} alt="" height={150} width={150}/>
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
