import React, { useState, useEffect } from "react";
import landscape from "../images/landscape.png";
export const Task1 = () => {
 const [position, setPosition] = useState(0)
  useEffect(() => {
   
    window.onscroll = ()=>{
        setPosition(window.scrollY);
    }
  }, []);

  return (
    <div className="task1">
      <div className="parallax-container">
        <img src={landscape} alt="" />
        <h1
          style={{
            transform: `translateY(${position * 0.3}px)`,
          }}
        >
          TREKK
        </h1>
      </div>
      <div className="filled-container"></div>
    </div>
  );
};
