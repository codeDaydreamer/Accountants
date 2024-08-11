import  { useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling
import { faqData } from './faqData'; // Import FAQ data

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id='faq'>
      <h1 className="faq-heading">F.A.Q</h1>
      <p className="faq-subheading">
        Frequently Asked Questions
      </p>
      <p className="faq-description">
        To help you - our customers quickly and easily find answers to commonly asked questions, saving them time and improving their overall experience with us.
      </p>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2>{faq.question}</h2>
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
