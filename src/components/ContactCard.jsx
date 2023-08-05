import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import first from "../images/contact-shape-1.png"
import second from "../images/contact-shape-2.png"
import third from "../images/contact-shape-3.png"

function ContactCard() {
    return (
        <div className="p-5" style={{ borderRadius: "5px", boxShadow: "0 12px 14px rgba(0, 0, 0, 0.2)" }}>
            {/* <img src={first} style = {{zIndex: "", position: "absolute", margin: "20rem 0rem 0rem -6rem"}} alt="" />
            <img src={second} style = {{position: "absolute", margin: "-3rem 6rem 6rem 14rem"}} alt="" />
            <img src={third} style = {{position: "absolute"}} alt="" /> */}
            <div style={{ display: "flex", zIndex: "-2" }}>
                <FaMapMarkerAlt size={24} color='blue' className='mr-3' />
                <div>
                    <span style={{ fontSize: "23px", fontWeight: "bold" }}>India Office</span>
                    <p style={{ color: "53545B", fontSize: "17px" }}>2nd Floor Gaurav Plaza Opposite Metro Piller No 50 Sikanderpur</p>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <RiMailLine size={24} color='blue' className='mr-3' />
                <div>
                    <span style={{ fontSize: "23px", fontWeight: "bold" }}>Email us directly</span>
                    <p style={{ color: "53545B", fontSize: "17px" }}>info@codenexus.in</p>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <AiOutlinePhone size={24} color='blue' className='mr-3' style={{ transform: "scaleX(-1)" }} />
                <div>
                    <span style={{ fontSize: "23px", fontWeight: "bold" }}>Phone</span>
                    <p style={{ color: "53545B", fontSize: "17px" }}><a href="tel:+919891875103" style = {{cursor: "pointer", textDecoration: "none"}}>+(91) 9891875103</a> <br /><a href="tel:+917303644012" style = {{cursor: "pointer", textDecoration: "none"}}>+(91) 7303644012</a></p>
                </div>
            </div>
            <div style = {{marginTop: "5rem"}}>
                <h3>Follow Us</h3>
                <div>
                    <Link to="/" className="me-4 text-reset">
                        <FaFacebookF />
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <FaTwitter />
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <FaGoogle />
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <FaInstagram />
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <FaLinkedin />
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactCard