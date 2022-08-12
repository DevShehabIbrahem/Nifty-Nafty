import { useRef, useEffect } from "react";
import "./HeroSection.scss";
import Navbar from "../NavBar/Navbar.jsx";
import center from "../../asset/symbols@2x.png";
import Rappid from "../../asset/fighting-rabbits@2x.png";
const HerSection = () => {
  const layer = useRef();
  useEffect(() => {
    const layerImage = layer.current;

    window.onscroll = () => {
      const y = window.pageYOffset;

      layerImage.style.transform = "translateY(" + y / -5 + "px)";
    };
  }, []);
  return (
    <div className="HerSection">
      <Navbar />
      <div className="inner__content">
        <div className="hero__content">
          <img src={center} alt="center" />
        </div>
        <img src={Rappid} alt="Rappid" ref={layer} />
      </div>
    </div>
  );
};

export default HerSection;
