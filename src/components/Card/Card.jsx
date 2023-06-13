import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" href="Services1.jsx"/>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" href="Services1.jsx">LEARN MORE</button>
    </div>
  );
};

export default Card;
