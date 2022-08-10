import React from "react";
import "./Navbar.scss";
import logo from "../../asset/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar flex items-center justify-between max-w-7xl m-auto py-5">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-11">
        <ul className="flex items-center gap-5">
          <li>Home</li>
          <li>Twitter</li>
          <li>Discord</li>
          <li>Roadmap</li>
        </ul>
        <button>Mint Now</button>
      </div>
    </div>
  );
};

export default Navbar;
