import "./style.css";
import { Illustration } from "../../assets/images";

import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h2>
          Lessons and insights <span>from 8 years</span>
        </h2>

        <p>
          Where to grow your business as a photographer: site or social media?
        </p>

        <button type="button">Register</button>
      </div>

      <div className="hero-img">
        <img src={Illustration} alt="" />
      </div>
      
    </div>
  );
}
