import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <button className="icon" onClick={() => navigate("/ticket")}>
          ＋
        </button>
        <button className="icon" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </nav>
  );
};

export default Nav;
