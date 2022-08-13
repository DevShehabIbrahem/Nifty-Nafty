import React from "react";
import "./About.scss";
import img1 from "../../asset/grid/img-01@x.png";
import img2 from "../../asset/grid/img-02@2x.png";
import img3 from "../../asset/grid/img-03@2x.png";
import img4 from "../../asset/grid/img-04@2x.png";
import img6 from "../../asset/grid/img-06@2x.png";
import img7 from "../../asset/grid/img-07@2x.png";

const About = () => {
  return (
    <div className="about flex flex-col items-center max-w-6xl m-auto">
      <div className="about__left">
        <div>
          <h3>WHAT IS NIFTYNAFTY?</h3>
        </div>
        <p>
          A collection of 9,999 NFTs on the Ethereum blockchain. Each NFT is
          based on a random generation of over 500 hand-drawn unique traits.
        </p>
      </div>

      <div className="about__right">
        <div className="about__right__btn">
          <button>Check Our Roadmap</button>
        </div>

        <div className="about__right__grid">
          <img src={img1} alt="" />
          <img src={img6} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
