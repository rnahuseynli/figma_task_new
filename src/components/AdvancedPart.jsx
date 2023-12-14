import React from "react";
import BrandIconimg from "./assets/Combined Shape (1).svg";
import DetailedIconimg from "./assets/icon 2.svg";
import FullyIconimg from "./assets/Shape.svg";

const AdvancedPart = () => {
  return (
    <div className="middle_part">
      <div className="middle_title">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        <div className="card_brand">
          <div className="brand_circle">
            <img className="iconimg" src={BrandIconimg} alt="" />
          </div>
          <h2 className="brand_title">Brand Recognition</h2>
          <p className="brand_text">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="card_detailed">
          <div className="detailed_circle">
            <img className="iconimg" src={DetailedIconimg} alt="" />
          </div>
          <h2 className="detailed_title">Detailed Records</h2>
          <p className="detailed_text">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card_fully">
          <div className="fully_circle">
            <img className="iconimg" src={FullyIconimg} alt="" />
          </div>
          <h2 className="fully_title">Fully Customizable</h2>
          <p className="fully_text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPart;
