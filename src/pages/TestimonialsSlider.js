import React, { useState } from "react";
import "./TestimonialsSlider.css";

const testimonials = [
  {
    title: "Smiling students, dedicated teachers and vibrant classrooms",
    content:
      "Such a special day in my life to viit such a great SEWA by all involved in Arunodaya School. Each staff is dedicated to take care of each gifted child. Big pranaam to all. Om!!! ",
    name: "Arun Patil",
     identity: "HSS UK, Londan",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
      "A wonderful school with such lovelu children and teachers. I have son really amazing decision and hand were that I’ve never witnessed before learning feeling very inspired!",
    name: "Tulsi Dave",
    identity: "London England",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
      "I had the incredible opportunity to meet mallappa and Jayashree ji and many of the children during their visit to Udaipur in 2023!Today, I got the chance to visit the Arunodaya school and see the hard work, dedicational and resilience put in form both the teachers and students very blessed to work here",
    name: "Aswesha Patil",
    identity: "London UK ",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
      "On the cation of disabled Day Observation, we need to carry a message to prevent the mental illness and physical disability. In this legends Arunodaya School doing wonderful work and providing all facilities to grave the future of disabled children. I wish all the best and pray almighty for the progress and prosperity of the school.",
    name: "Dr.M.D. Samudri ",
    identity: "Kon Seceatony, Indian Read Cross Gadag",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
    "Inspirational visit observing the students and all staff the work here is done Purely from the heart and witnessing the relationship between the teachers and children is truly beautiful.",
    name: "Diyaa Joshi ",
    identity: "UK",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
      "It’s always a pleasure and motivating to visit Arunodaya school. I wish a very warm healthy and successful growth is this institution and may the kind service mindset of this institute be the modle to the people of gadag.",
    name: "Mahammadsh Nadaf",
    identity: "Narasapur, Gadag",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
      "Today we have visited Aruodaya special school for the purpose of field orientation for our MSW Students. The agency was working very wonderful work. It was inspired our new social workers. Keep Moring, we are always with you if u need our support, you can ready to collaborate with you.",
    name: "Dr. Shekhar. ",
    identity: "BSW College BPG centre Gadag",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
    "IIt’s our honour to celebrated our son’s Birthday with God gifted child we really feel so satisfaction for the celebration, may god bless with lot of love keep smiling tacke care we are always with you.",
    name: "Viom/Vihaan Pavanlaumar  ",
    identity: "Karal",
    link: "#"
  },
  {
    title: "Christ Special School has been wonderful",
    content:
      "Humbled to see the information and support system created by Seva Bharathi, I compliment the people involved in creating this institution.",
    name: "Ashok Shetter ",
    identity: "KLE Tech University Hubli",
    link: "#"
  }
];

const pairTestimonials = [];
for (let i = 0; i < testimonials.length; i += 2) {
  pairTestimonials.push(testimonials.slice(i, i + 2));
}

function TestimonialsSlider() {
  const [page, setPage] = useState(0);

  const nextSlide = () => setPage((page + 1) % pairTestimonials.length);
  const prevSlide = () => setPage((page - 1 + pairTestimonials.length) % pairTestimonials.length);

  return (
    <div className="testimonials__fullscreen">
      <h1 className="testimonials__headline">TESTIMONIALS</h1>
      <div className="testimonials__sliderrow">
        <button className="testimonials__arrow" onClick={prevSlide} aria-label="Previous">&lt;</button>
        <div className="testimonials__cards">
          {pairTestimonials[page].map((t, idx) => (
            <div className="testimonial__card" key={idx}>
              <div className="testimonial__quote">&#8220;</div>
              <div className="testimonial__main">
                {/* <img src={t.image} alt="Testimonial" className="testimonial__img" /> */}
                <div className="testimonial__text">
                  <h2 className="testimonial__heading">{t.title}</h2>
                  <p className="testimonial__content">{t.content}</p>
                  <a href={t.link} className="testimonial__readmore">Read more</a>
                  <div className="testimonial__author">
                    <span>{t.name}</span>
                    {t.identity && <span className="testimonial__identity">..... {t.identity}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="testimonials__arrow" onClick={nextSlide} aria-label="Next">&gt;</button>
      </div>
    </div>
  );
}

export default TestimonialsSlider;