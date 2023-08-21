import React from 'react';
import './custom.css'; // Import your CSS file for styling
import intership from '../images/internship1.jpeg'
import corporate from '../images/corporate.jpeg'
import training from '../images/training1.jpg'
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className='padding'>
            <div className="section-container">
                <div className="image-container">
                    <img src={intership} alt="YourImage" className="image" />
                </div>
                <div className="text-container">
                    <div className="text-content">
                        <h2 className="heading_features">INTERNSHIP</h2>
                        <p className="paragraph_features">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo ut ex vestibulum fringilla sed nec enim.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint quas molestias necessitatibus rerum dolore nostrum sit accusamus dicta tenetur. Reiciendis, nobis quaerat quo recusandae incidunt eum in esse repellat!
                        </p>
                        <Link to="/contactus">
                            <button className="button_features">CONTACT US</button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="section-container">
                <div className="text-container">
                    <div className="text-content">
                        <h2 className="heading_features">SUMMER TRAINING</h2>
                        <p className="paragraph_features">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo ut ex vestibulum fringilla sed nec enim.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint quas molestias necessitatibus rerum dolore nostrum sit accusamus dicta tenetur. Reiciendis, nobis quaerat quo recusandae incidunt eum in esse repellat!
                        </p>

                    </div>
                </div>
                <div className="image-container image-container-right">
                    <img src={training} alt="YourImage" className="image image-left" />
                </div>
            </div>

            <div className="section-container">
                <div className="image-container">
                    <img src={corporate} alt="YourImage" className="image" />
                </div>
                <div className="text-container">
                    <div className="text-content">
                        <h2 className="heading_features">CORPORATE TRAINING</h2>
                        <p className="paragraph_features">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo ut ex vestibulum fringilla sed nec enim.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint quas molestias necessitatibus rerum dolore nostrum sit accusamus dicta tenetur. Reiciendis, nobis quaerat quo recusandae incidunt eum in esse repellat!
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;
