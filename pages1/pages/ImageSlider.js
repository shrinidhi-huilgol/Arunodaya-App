import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

const slides = [
  { url: "/image1.jpg", title: "Collaboration" },
  { url: "/image2.jpg", title: "Innovation" },
  { url: "/image3.jpg", title: "Curiosity" },
  { url: "/image4.jpg", title: "Impact" },
  { url: "/image5.jpg", title: "Learning" },
  { url: "/image6.jpg", title: "Growth" },
];

const AUTO_PLAY_DELAY = 3000;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), AUTO_PLAY_DELAY);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    if (startX.current - endX.current > 50) nextSlide();
    if (startX.current - endX.current < -50) prevSlide();
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <div className="carousel">
        {slides.map((slide, idx) => {
          let offset = idx - current;
          if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
          if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

          const transform = `
            translateX(${offset * 240}px) 
            translateZ(${-Math.abs(offset) * 130}px) 
            rotateY(${offset * 15}deg)
            scale(${offset === 0 ? 1.3 : 0.9})
          `;
          const zIndex = slides.length - Math.abs(offset);

          return (
            <div
              key={idx}
              className={`carousel-slide${offset === 0 ? " active" : ""}`}
              style={{ transform, zIndex }}
            >
              <div className="photo-frame">
                <img src={slide.url} alt={slide.title} />
              </div>
              <p>{slide.title}</p>
              <div className="reflection" />
            </div>
          );
        })}
      </div>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
