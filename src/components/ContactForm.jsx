import React, { useState } from 'react';
import './Contact.css';
import { db } from '../firebase';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message || !agreeTerms) {
        alert('Please fill in all fields and agree to the terms and conditions.');
        return;
    }

    try {
      // Save the form data to Firebase
      await db.collection('contact').add({
        name,
        email,
        subject,
        message,
        agreeTerms,
      });

      // Reset the form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setAgreeTerms(false);

      console.log('Form submitted and data saved to Firebase!');
    } catch (error) {
      console.error('Error saving data to Firebase:', error);
    }
  };

  return (
    <div style={{ zIndex: '-5' }}>
      <h2 style={{ fontSize: '40px', fontWeight: 'bolder' }}>Get in Touch</h2>
      <p style={{ fontSize: '16px', color: '#535458', fontFamily: 'sans-serif' }}>
        Have a question or just want to say hi? We'd love to hear from you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col p-3">
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              className="form-control-lg form-control p-3 input"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="col p-3">
            <input
              placeholder="Your Email"
              type="email"
              id="email"
              name="email"
              className="form-control-lg form-control p-3 input"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="row p-3">
          <input
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            className="form-control-lg form-control p-3 input"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="row p-3">
          <textarea
            placeholder="Enter Your Message"
            name="message"
            id="message"
            className="form-control-lg form-control p-3 input"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            style={{ marginRight: '5px' }}
            checked={agreeTerms}
            onChange={handleAgreeTermsChange}
          />
          <p style={{ margin: '0' }}>
            I agree to the <strong>Terms & Conditions</strong>
          </p>
        </div>
        <div className="mt-5">
          <button className="btn btn-primary p-3" style={{ backgroundColor: '#2B4EFF' }} type="submit">
            <span style={{ fontWeight: 'bold' }}>Send Your Message</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
