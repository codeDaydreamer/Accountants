import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import member1 from '../../assets/member1.jpg';

const testimonials = [
  { name: 'Jane Doe', company: 'Acme Corp', text: 'This is the best service I have ever used. Highly recommend it to anyone looking for quality and professionalism.', image: member1 },
  { name: 'John Smith', company: 'Tech Solutions', text: 'Exceptional service and support. The team is knowledgeable and attentive to all our needs.', image: member1 },
  { name: 'Emily Davis', company: 'Design Studio', text: 'Fantastic experience from start to finish. Great communication and excellent results.', image: member1},
  { name: 'Michael Brown', company: 'Marketing Inc', text: 'Great attention to detail and quick responses. Very satisfied with the overall experience.', image: member1 },
  { name: 'Lisa White', company: 'Consulting Group', text: 'Professional and reliable service. Their expertise has greatly benefited our business.', image:member1 },
  { name: 'David Lee', company: 'Finance Ltd', text: 'Outstanding service with a personal touch. They have been an invaluable partner.', image: member1 },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = testimonials.length;
  const maxIndex = totalItems - itemsPerPage;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials-container container" id='testimonials'>
      <h2 className="testimonials-heading">Testimonials</h2>
      <h3 className="testimonials-subheading">What our clients say</h3>
      <div className="testimonials-wrapper">
        <button className="arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="testimonials-cards">
          <div className="testimonials-cards-wrapper" style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
                  <div className="client-info">
                    <p className="client-name">{testimonial.name}</p>
                    <p className="client-company">{testimonial.company}</p>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right-arrow" onClick={handleNext} disabled={currentIndex >= maxIndex}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
