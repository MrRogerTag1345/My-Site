import React, { useState } from 'react';
import './ContactMe.css'; // Import the CSS file
import axios from 'axios';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is being submitted

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    console.log('Form data being sent:', formData);  // Log form data here

    try {
      const response = await axios.post('http://127.0.0.1:8000/app/send_message/', formData);
      setSuccessMessage('Message sent successfully!');
      setErrorMessage(''); // Clear any previous error message
      console.log('Message sent:', response.data);
    } catch (error) {
      setSuccessMessage(''); // Clear any previous success message
      setErrorMessage('Error sending message. Please try again later.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
    
  };

  return (
    <div className="contact-me">
      <h1>Get In Touch With Me</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Your Message</label>
          <textarea
            id="content"
            name="content"
            placeholder="Your Message"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
