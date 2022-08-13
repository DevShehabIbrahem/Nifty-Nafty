import { useEffect, useState } from "react";
import "./HeroSection.scss";
import Navbar from "../NavBar/Navbar.jsx";
import center from "../../asset/symbols@2x.png";
import Rappid from "../../asset/fighting-rabbits@2x.png";
const HerSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const hndleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", hndleScroll);

    return () => window.removeEventListener("scroll", hndleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <div
        className="HerSection"
        style={{
          transform: `translate(${0}px , ${offsetY * -0.1}px)`,
        }}
      >
        <div className="inner__content">
          <div className="hero__content">
            <img src={center} alt="center" />
          </div>
          <img
            src={Rappid}
            alt="Rappid"
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          />
        </div>
      </div>
    </>
  );
};

export default HerSection;
