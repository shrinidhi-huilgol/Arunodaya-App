import React, { useState } from "react";
import "./TeamSection.css";

const founders = [
  { name: "Basavaraj Naglapur", role: "Founder", image: "/edit1.jpg" },
  { name: "Lukkannasa Rajoli", role: "Founder", image: "/edit2.jpg" },
  { name: "Umakanatasa Merwade", role: "HR, Finance & Administration", image: "/edit3.jpg" },
  { name: "Prakash Vailaya", role: "Academics", image: "/edit4.jpg" },
];

const governors = [
  { name: "JJitendra Shah", role: "Governor", image: "/edit6.jpg" },
  { name: "Dr. Umesh Hadi", role: "Governor", image: "/edit5.jpg" },
];
const teamMembers = [
  { name: "Basavaraj Pattanshetty", role: "Projects and CSR", image: "/edit7.jpg" },
  { name: "Jaiprakash Bhanjetri", role: "Family Services", image: "/edit8.jpg" },
  { name: "Jayaraj Mulgund", role: "HR, Finance & Administration", image: "/edit9.jpg" },
  { name: "Lalit Jain", role: "Academics", image: "/edit10.jpg" },
];

export default function TeamSection() {
  const [tab, setTab] = useState("TEAM");

  let people;
  switch (tab) {
    case "FOUNDERS":
      people = founders;
      break;
    case "GOVERNORS":
      people = governors;
      break;
    default:
      people = teamMembers;
  }

  return (
    <div className="team-container">
      <h1 className="team-title">TEAM</h1>
      <div className="team-inner">
        <div className="team-tabs">
          {["FOUNDERS", "GOVERNORS", "TEAM"].map((t) => (
            <div
              key={t}
              className={`team-tab ${tab === t ? "team-tab-active" : ""}`}
              onClick={() => setTab(t)}
              style={{ cursor: "pointer" }}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="team-members">
          {people.map((tm) => (
            <div key={tm.name} className="team-member">
              <div className="team-member-image">
                <img
                  src={tm.image}
                  alt={tm.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="team-member-name">{tm.name}</div>
              <div className="team-member-role">{tm.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}