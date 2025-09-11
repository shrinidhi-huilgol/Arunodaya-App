import React from "react";
import "./HomePage2.css";
import ImageSlider from "./ImageSlider"; 
import StatsSection from "./StatsSection";

function HomePage2() {
  return (
    <div className="school-container">
      {/* Vision */}
      <div className="vision-section">
        <div className="school-heading">Vision</div>
        <div className="school-text-center school-mb-40">
          Our vision is rooted in providing a blend of home-based emotional care
          and professionally guided special Training/ Education and therapy.
        </div>
      </div>

      {/* Mission */}
      <div className="school-mission-section">
        <div className="school-mission-text">
          <div className="school-subheading">Our Mission</div>
          <div>
            To provide a high-quality education that nurtures the holistic
            development of students.
            <br />
            <br />
            To help students develop into responsible and responsive global
            citizens with strong moral values and an understanding of diverse
            cultures.
          </div>
        </div>
        <div className="school-diagram">
          <img
            src="/diagram.jpg"
            alt="Mission Diagram"
            className="school-diagram-image"
          />
        </div>
      </div>

      {/* About Us */}
      <div className="about-section">
        <div className="school-subheading">About Us</div>
        <div className="school-about-text">
          Arunoday Special School, a project of Sewa Bharati, has commenced its
          activities in the year 2007 with the help of society. It is a
          non-residential day school for children with special needs. The
          current strength of school is 42 students. Here there are children
          with mental retardation, cerebral palsy, autism, and also with
          multiple disabilities.
        </div>
        <hr className="school-hr" />
      </div>

      {/* Slider + Stats + Timeline */}
      <div className="slider-section">
        <ImageSlider />
        <StatsSection />
      </div>
    </div>
  );
}

export default HomePage2;
