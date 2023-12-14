import React from "react";
import Image from "./assets/working_with_computer (2).svg";

const Header = () => {
  return (
    <div>
      <div className="first_slider">
        <div className="title">
          <h1>Shortly</h1>
          <p className="about">Features</p>
          <p className="about">Pricing</p>
          <p className="about">Resources</p>
          <div className="btn_part">
            <p className="link">Login</p>
            <button className="btn_sign-up">Sign Up</button>
          </div>
        </div>

        <div className="main_part">
          <div className="text">
            <h1>More than just shorter links</h1>
            <p className="small_text">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="started_btn">Get Started</button>
          </div>
          <div className="img">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className="input_part">
        <input
          className="input"
          type="text"
          placeholder="Shorten a link here..."
        />

        <button className="shorten_btn">Shorten It</button>
      </div>
    </div>
  );
};

export default Header;
