import React from 'react';
import './TestimonialCard.css'; // This assumes styles are still in a separate file

const TestimonialCard = ({ name, designation, text, rating, image }) => {
  return (
    <div className="testimonial-card">
      <div className="card-left">
        <h4 className="sample-name">{name}</h4>
        <p className="designation">{designation}</p>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
  );
};

function App() {
  const testimonials = [
    {
      name: 'Tulasi Dave',
      Location: 'Londan-Englad',
      text: 'A wonderful school with such lovely children and teachers, I have an really amazing dedication and hard work that ive never witnessed before. Learning feeling very inspired',
      rating: 4.5,
    },
    {
      name: 'Ashlesha Patil',
      Location: 'Lodan Uk',
      text: 'Today, I got the chance to visit the Arunodaya School and see the hard work, dedication and resilience put in from both the teachers and students very blessed to here!',
      rating: 4,
    },
    {
      name: 'Dytaa Joshi',
      Location: 'Uk',
      text: 'Inspirational visit observing the students and all saff. The work here is done purely from the heart and whitnessing the relationship between the teachers and children is truly beautiful',
      rating: 3.5,
    },

    {
      name: 'Dr.M.D.Samudri',
      Location: 'Indian Red Cross, Gadag',
      text: 'On the occation of disable day observation. Weneed to carry a message to prevent the mental illiness and physical disability. In this legends Arunodaya school doing wonderful work and providing all facilities to give the future of disabled children. I wish all the best and pray allmighty for the progress and prosparity of the school',
      rating: 4,
    },
    {
      name: 'Mohammadsha. Nadaf',
      Location: 'Narasapur Gadag',
      text: 'It’s always a pleasure and motivating to visit Arunodaya school. I wish a very warm healthy and successful growth is this institution and may the kind service mindset of this institute be the modle to the people of gadag.',
      rating: 4.5,
    },
    {
      name: 'Ashok Shetter ',
      Location: 'Vice-Chancellar KLE Tech University Hubli',
      text: 'Humbled to see the information and support system created by Seva Bharathi, I compliment the people involved in creating this institution.',
      rating: 4,
    },
    {
      name: 'Viom/Vihaan Pavanlaumar ',
      Location: 'Karal',
      text: 'It’s our honour to celebrated our son’s Birthday with God gifted child we really feel so satisfaction for the celebration, may god bless with lot of love keep smiling tacke care we are always with you.',
      rating: 5,
    },
    {
      name: 'Arun Patil',
      Location: 'HSS UK, Londan',
      text: 'Such a special day in my life to viit such a great SEWA by all involved in Arunodaya School. Each staff is dedicated to take care of each gifted child. Big pranaam to all. Om!!! ',
      rating: 3.3,
    }
  ];

  return (
    <div className="app">
      <h2><u>FeedBack</u></h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
}

export default App;
