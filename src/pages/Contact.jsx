import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactCard from '../components/ContactCard';
import '../components/Contact.css'; // Import CSS file for custom styling

function Contact() {
  return (
    <div className='card container' style={{ border: "none", marginTop: "10rem", marginBottom: "5rem" }}>
      <div className='row'>
        <div className='col-md-8'>
          <ContactForm />
        </div>
        <div className='col-md-4'>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Contact;
