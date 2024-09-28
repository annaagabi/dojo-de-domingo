import {
  InstagramIcon,
  SocialIcon,
  TwitterIcon,
  youtubeIcon,
  Logo,
  Send,
} from "../../assets/images";
import "./style.css";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="div1">
        <div className="logo-footer">
          <img src={Logo} alt="" />
          <h2>Nexcent</h2>
        </div>
        <p>
          Copyright © 2020 Nexcent ltd. <br />
          All rights reserved
        </p>

        <div className="social-media">
          <div className="insta">
            <img src={InstagramIcon} alt="" />
          </div>
          <div className="dribble">
            <img src={SocialIcon} alt="" />
          </div>
          <div className="twitter">
            <img src={TwitterIcon} alt="" />
          </div>
          <div className="youtube">
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-column1">
          <h3>Company</h3>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
        <div className="footer-column1">
          <h3>Support</h3>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
        </div>
        <div className="footer-colunm2">
          <h3>Stay up to date</h3>
          <div className="input-div">
            <input type="text" placeholder="Your email address"></input>
            <img src={Send} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
