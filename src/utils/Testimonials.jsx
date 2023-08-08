import React from 'react';
import logo from '../images/logo.png';
import bannerImg from '../images/banner-img-1.png';
const Testimonials = () => {
    return (
        <section className="py-12 py-sm-24 pb-md-32 position-relative overflow-hidden">
            <img
                className="position-absolute top-0 mt-n20 start-0"
                src="flaro-assets/images/testimonials/gradient.svg"
                alt=""
            />
            <img
                className="position-absolute bottom-0 mb-n20 end-0"
                src="flaro-assets/images/testimonials/gradient.svg"
                alt=""
            />
            <div className="container position-relative">
                <h1 className="text-center h3 mb-16">Don't just take our word for it</h1>
                <div className="mw-7xl mx-auto">
                    <div className="row mb-n6">
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4 mb-6">
                                <div className="testimonial-card">
                                    <div className="d-flex align-items-center mb-6">
                                        <img
                                            src={testimonial.avatar}
                                            alt={`${testimonial.name}'s avatar`}
                                            className="avatar"
                                        />
                                        <div className="ps-4">
                                            <h6 className="mb-0">{testimonial.name}</h6>
                                            <span className="fs-9 text-secondary">
                                                @{testimonial.username}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mw-md fs-7 pb-6 mb-auto">{testimonial.message}</p>
                                    <span className="fs-9 text-secondary">
                                        {testimonial.timestamp}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

const testimonialsData = [
    {
        name: 'Jacob Jones',
        username: 'brooklysim',
        avatar: { bannerImg },
        message:
            "If you haven't tried out Flaro App yet, I would definitely recommend it for both designers and developers 🤙🏻",
        timestamp: '3 days ago',
    }
    // Add more testimonials...
];
