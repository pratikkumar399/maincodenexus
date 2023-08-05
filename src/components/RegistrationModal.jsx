import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "./Modal.css"
import { db } from "../firebase";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    education: '',
    passingYear: '',
    course: '',
  });

  const submitForm = async(e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    // Reset form data

    if (!formData.name || !formData.email || !formData.mobile || !formData.education || !formData.passingYear || !formData.course) {
      alert('Please fill in all fields');
      return;
  }

    try {
      // Save the form data to Firebase
      await db.collection('registration').add(formData);

    setFormData({
      name: '',
      email: '',
      mobile: '',
      education: '',
      passingYear: '',
      course: '',
    });
  } catch(err) {
    console.log(err);
  }
    onClose();
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal show={isOpen} onHide={onClose} className="registration-modal">
      <Modal.Body>
        <div style = {{padding: "1rem"}}>
          <div style = {{marginBottom: "2rem"}}>
            <h1 style = {{color: "0E1133", fontWeight: "bolder"}}>Register A Free Demo Class Now.</h1>
            <p style = {{color: "0E1133", fontWeight: "bolder", fontSize: "1.1rem"}}>We will contact you to answer your Queries.</p>
          </div>
          <div className="row">
            <div className="col p-3">
              <input placeholder = "Your Name" type="text" id="name" className='form-control-lg form-control p-3' name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="col p-3">
              <input placeholder = "Your Email" type="email" id="email" name="email" className="form-control-lg form-control p-3" value={formData.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <input placeholder = "Mobile Number" type="text" id="mobile" className='form-control-lg form-control p-3' name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>
            <div className="col p-3">
              <input placeholder='Education/Qualification' type="education" id="education" name="education" className="p-3 form-control-lg form-control" value={formData.education} onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <input placeholder='Passing Year' type="text" id="passingYear" className='form-control-lg form-control p-3' name="passingYear" value={formData.passingYear} onChange={handleInputChange} />
            </div>
            <div className="col p-3">
              <input placeholder='Course You Are Intrested In' type="text" id="course" name="course" className="form-control-lg form-control p-3" value={formData.course} onChange={handleInputChange} />
            </div>
          </div>
          <div style = {{display: "flex", justifyContent: "center"}}>
            <button onClick = {submitForm} className = "btn btn-primary register-btn" style = {{marginTop: "1rem", padding: "0.5rem 1rem 0.5rem 1rem"}}>Submit</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegistrationModal;
