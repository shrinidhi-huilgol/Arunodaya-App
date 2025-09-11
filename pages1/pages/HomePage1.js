import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage1.css";

function HomePage1() {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/payment");
  };

  return (
    <div
      className="container"
      style={{
        background: `linear-gradient(rgba(29, 90, 140, 0.7), rgba(29, 90, 140, 0.7)), url("/arn.jpg") center/cover no-repeat`
      }}
    >
      <nav className="nav">
        <div className="logoSection">
          <div className="logo">
            <img src="/Sevauk logo.jpg" alt="Sevauk Logo" />
          </div>
          <div className="logo">
            <img src="/logo22.jpg" alt="Arunodaya Logo" />
          </div>
          <span className="title">ARUNODAYA</span>
        </div>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/events">Events</a>
          <button className="loginBtn" onClick={handleDonateClick}>
            Donate Us
          </button>
        </div>
      </nav>

      <div className="contentCenter">
        <div className="slogan">
          <span>
            BEHIND EVERY STEP OUR CHILDREN TAKE THERE ARE HANDS THAT HOLD,
            HEARTS THAT CARE,
          </span>
          <br />
          <span>AND WHO BELIEVE IN THEIR POTENTIAL.</span>
        </div>
        <button
          className="enrollBtn"
          onClick={() => (window.location.href = "#contact")}
        >
          Contact Us
        </button>
      </div>

      <button className="donateSticky" onClick={handleDonateClick}>
        Donate Us
      </button>
    </div>
  );
}

export default HomePage1;
