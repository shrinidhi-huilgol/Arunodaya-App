// import React, { useRef, useState } from "react";
// import "./HomePage1.css";
// import Payment from "./Payment";
// import ImageSlider from "./ImageSlider"; // ✅ Import your slider component here

// function HomePage1() {
//   const [showPayment, setShowPayment] = useState(false);
//   const aboutRef = useRef(null);
//   const eventsRef = useRef(null);

//   const handleDonateClick = () => {
//     setShowPayment(true);
//   };

//   const handleClose = () => {
//     setShowPayment(false);
//   };

//   const scrollToAbout = () => {
//     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToImageSlider = () => {
//     eventsRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="container"
//         style={{
//           background:
//             'linear-gradient(rgba(29, 90, 140, 0.7), rgba(29, 90, 140, 0.7)), url("/arn.jpg") center/cover no-repeat',
//         }}
//       >
//         <nav className="nav">
//           <div className="logoSection">
//             <div className="logo">
//               <img src="/sevauk logo.jpg" alt="Sevauk Logo" />
//             </div>
//             <div className="logo">
//               <img src="/logo22.jpg" alt="Arunodaya Logo" />
//             </div>
//             <div classname="title-and-quote">
//             <span className="title">ARUNODAYA</span>
//             <p className="quote">“Empowering Special Minds for a Brighter Tomorrow.</p>
//           </div>
//           </div>

//           <div className="navLinks">
//             <a href="#">Home</a>
//             <a className="linkBtn" onClick={scrollToAbout}>About</a>
//             <a className="linkBtn" onClick={scrollToImageSlider}>Events</a>
//             <button className="loginBtn" onClick={handleDonateClick}>
//               Donate Us
//             </button>
//           </div>
//         </nav>

//         <div className="contentCenter">
//           <div className="slogan">
//             <span>BEHIND EVERY STEP OUR CHILDREN TAKE</span>
//             <br />
//             <span>THERE ARE HANDS THAT HOLD, HEARTS THAT CARE,</span>
//             <br />
//             <span>AND WHO BELIEVE IN THEIR POTENTIAL.</span>
//           </div>
//           <button
//             className="enrollBtn"
//             onClick={() => (window.location.href = "#contact")}
//           >
//             Contact Us
//           </button>
//           <ContactModel/>
//         </div>

//         <button className="donateSticky" onClick={handleDonateClick}>
//           Donate Us
//         </button>

//         {/* Payment Modal */}
//         {showPayment && (
//           <div className="paymentModal">
//             <div className="modalOverlay" onClick={handleClose}></div>
//             <div className="slideUpModal">
//               <div className="modalHeader">
//                 <h2>Donate to Arunodaya</h2>
//                 <button className="closeBtn" onClick={handleClose}>×</button>
//               </div>
//               <div className="modalBody">
//                 <p>"A Small Gift From You Creates A World Of Possibilities For Them."</p>
//                 <Payment />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* Vision */}
//       <br></br>
//       <div className="vision-section">
//         <div className="school-heading">Vision</div>
//         <div className="school-text-center school-mb-40">
//           Our vision is rooted in providing a blend of home-based emotional care
//           and professionally guided special Training/ Education and therapy.
//         </div>
//       </div>
//        {/* Mission */}
//       <div className="school-mission-section">
//         <div className="school-mission-text">
//           <div className="school-subheading">Our Mission</div>
//           <div>
//             To provide a high-quality education that nurtures the holistic
//             development of students.
//             <br />
//             <br />
//             To help students develop into responsible and responsive global
//             citizens with strong moral values and an understanding of diverse
//             cultures.
//           </div>
//         </div>
//         <div className="school-diagram">
//           <img
//             src="/diagram.jpg"
//             alt="Mission Diagram"
//             className="school-diagram-image"
//           />
//         </div>
//         </div>

//       {/* About Section */}
//       <div ref={aboutRef} className="about-section">
//         {/* <div className="school-about-text"> */}
//           {/* <div className="school-subheading">About Us</div>
//           <div>
//          A Brighter Dawn in Gadag: Arunodaya’s Humble Beacon of Hope
// Since 2007, Arunodaya Special School, an initiative of Seva Bharati in Gadag, has emerged from a humble rented room with just 26 students into a sanctuary of warmth and professional care for children with intellectual disabilities, cerebral palsy, autism, and multiple challenges. Guided by the principle of blending home based emotional support with specialized training, the school now nurtures 48 young hearts—ensuring each child receives not just education, but compassion. Simultaneously, over 150 families eagerly seek its outreach for tailored counselling and guidance, reflecting the school's growing reputation as a sanctuary for hope and empowerment SevabharatiSewa UK.
// Nurturing Every Dimension of Growth
// At Arunodaya, each child’s holistic development is the heart of their mission. The school offers a spectrum of services—from modern physiotherapy, visual input rooms, and electromagnetic therapy to expert counselling led by doctors and therapists. This vibrant blend of academic, physical, and emotional support empowers students to flourish and grow toward independence Sevabharati. Recognizing this growing impact, the Gadag municipal authorities have graciously allotted an 18,000 sq ft plot in the city center for constructing a new, purpose built school and training center
// From Classroom Wings to Mainstream Flight—Hope Realized with Your Support
// With your support, Arunodaya has already empowered 183 children through transformative training—with 29 successfully transitioning into mainstream schools, and one extraordinary student even achieving a Master’s in Social Work—stories that embody the school's unwavering belief in dignity and self reliance. This is a journey where compassion meets purpose—to build inclusive futures one child at a time. You can be part of this story—your donation today can help build brighter classrooms, deepen expert training, and open doors to independent, joyful futures for more children in Gadag.
// </div> */}


//           {/* Full about us content here */}
//         {/* </div>
//        <div className="school-diagram">
//           <img
//             src="/diagram.jpg"
//             alt="Mission Diagram"
//             className="school-diagram-image"
//           />
//         </div> */}
//          <div className="school-mission-section">
//         <div className="school-mission-text">
//            <div className="school-subheading">About Us</div>
//           <div>
//            A Brighter Dawn in Gadag: Arunodaya’s Humble Beacon of Hope
// Since 2007, Arunodaya Special School, an initiative of Seva Bharati in Gadag, has emerged from a humble rented room with just 26 students into a sanctuary of warmth and professional care for children with intellectual disabilities, cerebral palsy, autism, and multiple challenges. Guided by the principle of blending home based emotional support with specialized training, the school now nurtures 48 young hearts—ensuring each child receives not just education, but compassion. Simultaneously, over 150 families eagerly seek its outreach for tailored counselling and guidance, reflecting the school's growing reputation as a sanctuary for hope and empowerment SevabharatiSewa UK.
// Nurturing Every Dimension of Growth
// At Arunodaya, each child’s holistic development is the heart of their mission. The school offers a spectrum of services—from modern physiotherapy, visual input rooms, and electromagnetic therapy to expert counselling led by doctors and therapists. This vibrant blend of academic, physical, and emotional support empowers students to flourish and grow toward independence Sevabharati. Recognizing this growing impact, the Gadag municipal authorities have graciously allotted an 18,000 sq ft plot in the city center for constructing a new, purpose built school and training center
// From Classroom Wings to Mainstream Flight—Hope Realized with Your Support
// With your support, Arunodaya has already empowered 183 children through transformative training—with 29 successfully transitioning into mainstream schools, and one extraordinary student even achieving a Master’s in Social Work—stories that embody the school's unwavering belief in dignity and self reliance. This is a journey where compassion meets purpose—to build inclusive futures one child at a time. You can be part of this story—your donation today can help build brighter classrooms, deepen expert training, and open doors to independent, joyful futures for more children in Gadag.

//           </div>
//         </div>
//         <div className="school-diagram">
//           <img
//             src="/diagram.jpg"
//             alt="Mission Diagram"
//             className="school-diagram-image"
//           />
//           <img
//             src="/diagram.jpg"
//             alt="Mission Diagram"
//             className="school-diagram-image"
//           />
//           <div>
//           <img
//             src="/diagram.jpg"
//             alt="Mission Diagram"
//             className="school-diagram-image"
//           />
//           </div>
//         </div>
//         </div>
//       </div>

//       {/* Events Section */}
//       <div ref={eventsRef} className="events-section">
//         <h2 className="school-subheading">Our Events</h2>
//         <ImageSlider />
//         <hr className="school-hr" />
//       </div>
//     </div>
//   );
// }

// export default HomePage1;
import React, { useRef, useState } from "react";
import "./HomePage1.css";
import Payment from "./Payment";
import ImageSlider from "./ImageSlider";
import ContactModal from "./ContactModal"; // import

function HomePage1() {
  const [showPayment, setShowPayment] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const aboutRef = useRef(null);
  const eventsRef = useRef(null);

  // Donate handlers
  const handleDonateClick = () => setShowPayment(true);
  const handleClosePayment = () => setShowPayment(false);

  // Contact handlers
  const handleContactClick = () => setShowContactModal(true);
  const handleCloseContact = () => setShowContactModal(false);

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

  const scrollToImageSlider = () =>
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      {/* Hero Section */}
      <div
        className="container"
        style={{
          background:
            'linear-gradient(rgba(29, 90, 140, 0.7), rgba(29, 90, 140, 0.7)), url("/arn.jpg") center/cover no-repeat',
        }}
      >
        <nav className="nav">
          <div className="logoSection">
            <div className="logo">
              <img src="/sevauk logo.jpg" alt="Sevauk Logo" />
            </div>
            <div className="logo">
              <img src="/logo22.jpg" alt="Arunodaya Logo" />
            </div>
            <div className="titleBlock">
              <span className="title">ARUNODAYA</span>
              <div className="logo-quote">
                Empowering Special Minds for a Brighter Tomorrow.
              </div>
            </div>
          </div>

          <div className="navLinks">
            <a href="#">Home</a>
            <a className="linkBtn" onClick={scrollToAbout}>
              About
            </a>
            <a className="linkBtn" onClick={scrollToImageSlider}>
              Events
            </a>
            <a className="linkBtn" onClick={handleContactClick}>
              Contact Us
            </a>
          </div>
        </nav>

        <div className="contentCenter">
          <div className="slogan">
            <span>BEHIND EVERY STEP OUR CHILDREN TAKE</span>
            <br />
            <span>THERE ARE HANDS THAT HOLD, HEARTS THAT CARE,</span>
            <br />
            <span>AND WHO BELIEVE IN THEIR POTENTIAL.</span>
          </div>
          <button className="enrollBtn" onClick={handleDonateClick}>
            Donate Us
          </button>
        </div>

        <button className="donateSticky" onClick={handleDonateClick}>
          Donate Us
        </button>

        {/* ✅ Payment Modal */}
        {showPayment && (
          <div className="paymentModal">
            <div className="paymentOverlay" onClick={handleClosePayment}></div>
            <div className="slideUpModal">
              <div className="modalHeader">
                <h2>Donate to Arunodaya</h2>
                <button className="closeBtn" onClick={handleClosePayment}>
                  ×
                </button>
              </div>
              <div className="modalBody">
                <h3>
                  "A Small Gift From You Creates A World Of Possibilities For
                  Them."
                </h3>
                <Payment />
              </div>
            </div>
          </div>
        )}

        {/* ✅ Contact Modal */}
        {showContactModal && <ContactModal onClose={handleCloseContact} />}
      </div>
    </div>
    
  );
}

export default HomePage1;
