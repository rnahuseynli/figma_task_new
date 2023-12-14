import React from "react";
import Img from "./assets/Group 19.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="div">
        <h1 className="boost">Boost your links today</h1>
        <button className="foot_btn">Get Started</button>
      </div>
      <div className="finish">
        <h1 className="foot_title">Shortly</h1>
        <div className="abouts">
          <div className="features">
            <p className="foot_about">Features</p>
            <ul>
              <li className="about_text">Link Shortening</li>
              <li className="about_text">Branded Links</li>
              <li className="about_text">Analytics</li>
            </ul>
          </div>
          <div className="pricing">
            <p className="foot_about">Pricing</p>
            <ul>
              <li className="about_text">Blog</li>
              <li className="about_text">Developers</li>
              <li className="about_text">Support</li>
            </ul>
          </div>
          <div className="Resources">
            <p className="foot_about">Resources</p>

            <ul>
              <li className="about_text">About</li>
              <li className="about_text">Our Team</li>
              <li className="about_text">Careers</li>
              <li className="about_text">Contact</li>
            </ul>
          </div>
          <div className="foot_icon">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
