import React from "react";
import { useHistory } from "react-router-dom";
import background from "../../assets/cover/react-pic.png";
import Image from "../Image";
import pictureOfMe from "../../assets/IMG_0554.JPG";
import "./Nav.css";

const Nav = () => {
  const history = useHistory();

  return (
    <div
      className="nav-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="logo-container">
        <Image
          height="75px"
          width="90px"
          src={pictureOfMe}
          onClick={() => history.push("/")}
        />
      </div>
      <div className="nav-items-container">
        <button className="nav-item" onClick={() => history.push("/")}>
          About
        </button>
        <button className="nav-item" onClick={() => history.push("/contact")}>
          Contact
        </button>
        <button className="nav-item" onClick={() => history.push("/portfolio")}>
          Portfolio
        </button>
        <button className="nav-item" onClick={() => history.push("/resume")}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Nav;
