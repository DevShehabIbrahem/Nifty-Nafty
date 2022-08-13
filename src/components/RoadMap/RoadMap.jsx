import { useState, useEffect } from "react";
import "./RoadMap.scss";
import layer1 from "../../asset/roadmap/moon.png";
import layer2 from "../../asset/roadmap/earth.png";
import layer3 from "../../asset/roadmap/rocket-small.png";
import layer4 from "../../asset/roadmap/rocket-top.png";
const RoadMap = () => {
  const [offsetY, setOffsetY] = useState(0);
  console.log(offsetY);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="roadmap">
      <h3>ROADMAP</h3>
      <div className="roadmap__content">
        <img
          src={layer1}
          alt="layer1"
          style={{ transform: `translate( ${0}px,${offsetY * 0.1}px)` }}
        />
        <img
          src={layer2}
          alt="layer1"
          style={{
            transform: `translate(${offsetY * -0.2}px ,${offsetY * -0.2}px)`,
          }}
        />
        <img
          src={layer3}
          alt="layer1"
          style={{
            transform: `translateY(${offsetY * -0.7}px)`,
          }}
        />
        <img src={layer4} alt="layer1" />
      </div>
    </div>
  );
};

export default RoadMap;
