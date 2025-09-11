import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Install with react-icons
import "./ContactModal.css";

function ContactModal({ onClose }) {
  return (
    <div className="contactOverlay">
      <div className="contactCard">
        <div className="contactHeader">
          <div className="contactHeader-left">
            {/* Replace src with your logos as needed */}
            <img src="/sewa-logo.png" alt="sewa logo" className="contactLogo" />
            <img src="/arunodaya-logo.png" alt="arunodaya logo" className="contactLogo" />
            <span className="arunodayaText">
              <span style={{ color: "#23234e", fontWeight: 700 }}>ARU</span>
              <span style={{ color: "#ff6900", fontWeight: 700 }}>NO</span>
              <span style={{ color: "#fed14f", fontWeight: 700 }}>DAYA</span>
            </span>
          </div>
          <div className="contactHeader-main">
            <span className="reachUsText">REACH US</span>
            <div className="reachUsBar" />
          </div>
          <button className="closeBtn" onClick={onClose}>×</button>
        </div>

        <div className="contactBody">
          <div className="contactCol">
            <div className="contactCol-icon"><FiMapPin /></div>
            <div className="contactCol-title">Our Head Office</div>
            <div className="contactCol-info">
              Kerala Rehabilitation Institute<br />
              for the Physically Affected (KRIPA)<br />
              Chunangamvely, Erumathala P.O.,<br />
              Aluva 683112 Kerala, India
            </div>
          </div>
          <div className="contactCol">
            <div className="contactCol-icon"><FiPhone /></div>
            <div className="contactCol-title">Our Phone</div>
            <div className="contactCol-info">
              9539839953<br />
              9074241011<br />
              0484-2838153
            </div>
          </div>
          <div className="contactCol">
            <div className="contactCol-icon"><FiMail /></div>
            <div className="contactCol-title">Our Mail</div>
            <div className="contactCol-info" style={{ wordBreak: "break-all" }}>
              kriparajagiri@gmail.com<br />
              kripaspecialschool@gmail.com<br />
              kriparehab@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
