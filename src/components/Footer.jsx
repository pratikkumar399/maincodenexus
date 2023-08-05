import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {

    const handleMapClick = () => {
        // Redirect to the desired location on the map
        window.open('https://maps.google.com/?q=28.481728,77.098487', '_blank');
      };

  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/codenexusindia"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset" onClick={() => handleMapClick()}>
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <a
              href="https://www.instagram.com/officialcodenexus/"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href=" https://www.linkedin.com/company/codenexusindia/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <Link className="navbar-brand" to="/">
                  <img
                    style={{ height: "3rem" }}
                    className="navbar-logo"
                    src={logo}
                    alt="Image"
                  />
                </Link>
                <div style={{ marginTop: "1.5rem" }}>
                  <ul>
                    <li>
                      Empower your future with our student placement platform.
                    </li>
                    <li>The gateway to your dream career.</li>
                    <li>Join us today and unlock a world of possibilities.</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <Link to="/courses" className="text-reset">
                    Courses
                  </Link>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Event
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a
                    href="https://blog.codenexusindia.com/"
                    className="text-reset"
                  >
                    Blog
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Platforms</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Browse Library
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Partners
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    News and Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ's
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Tutorials
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>2nd Floor Gaurav Plaza
                  Opposite Metro Piller No 50 Sikanderpur
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> <a href="tel:+919891875103" style = {{cursor: "pointer", textDecoration: "none"}}>+(91) 9891875103 </a>
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> <a href="tel:+917303644012" style = {{cursor: "pointer", textDecoration: "none"}}>+(91) 7303644012</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 codenexusindia.com
        </div>
      </footer>
    </div>
  );
};

export default Footer;
