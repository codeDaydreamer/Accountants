import './Contact.css'
import { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dcff7b82-bbe0-4fce-bd44-3472f38b346f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Submitted Successfully!! We shall get back to you shortly.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Talk to us </h3>
            <p>We value your feedback and inquiries. Whether you have questions about our services, need assistance, or just want to get in touch, our team is here to help. Please feel free to reach out to us through the contact form on this page or via our email address. We are committed to providing prompt and personalized support to ensure all your needs are met. Thank you for choosing us; we look forward to connecting with you!</p>
            <ul>
                <li><i className="fa-solid fa-envelope icons"></i>info@accountants.com</li>
                <li><i className="fa-solid fa-phone icons"></i>+254 123 456</li>
                <li><i className="fa-solid fa-location-dot icons"></i>westsie towers</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Your Email</label>
                <input type="email" name='Email' placeholder='Enter your email' required />
                <label>Your Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Your Message</label>
                <textarea name="message" id="" rows={10} placeholder='Type your message here' required></textarea>
               <button type='submit' className='btn dark-btn'>Submit <i className="fa-solid fa-arrow-right"></i></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact