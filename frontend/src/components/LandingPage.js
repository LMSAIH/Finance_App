import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Landing from "./LandingPage.css";
import logo from "./images/image.png";
import LandingPageGraph from "./Graphs/LandingPageGraph";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <img src={logo} alt="Logo" height="100px" />

        <div className="spread">
          <ul className="navlist">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="workspace">
        <div className="container">
          <h2>
            {" "}
            <span className = "discover">Discover</span> how you can <span className = "discover">manage</span> all your finances with an
            application that can <span className = "discover"> take care  </span>of organizing it all for 
            <span className="you"> you</span>.
          </h2>
          <h1>Welcome to Finance App.</h1>
          <h3 className="landingDescription">Your path for financial freedom.</h3>
        </div>

        <div className="container2">
          <LandingPageGraph />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
