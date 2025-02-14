import React from 'react';
import './ContactUs.css';  
import { useState } from 'react';
import Navbar from '../navbar/navbar';
const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/contact/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
            const data = await response.json();
            setResponseMessage(data.message);
            setFormData({ name: '', email: '', message: '' });
          } catch (error) {
            setResponseMessage('Failed to send the message. Please try again.');
          }
    }
  return (
    <> 
   <Navbar/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  name="name"  value={formData.name} placeholder="Enter your name" onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"  name="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5"  name="message" onChange={handleChange}  value={formData.message} placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" >Send Message</button>

      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
     </>
  );
};

export default ContactUs;
