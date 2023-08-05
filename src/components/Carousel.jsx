/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    useEffect(() => {
        // Initialize the Bootstrap carousel when the component mounts
        const carousel = document.getElementById('carouselExampleIndicators');
        const bootstrap = window.bootstrap;
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 2000, // Set the interval time (milliseconds) between slides
            pause: false, // Disable pausing on hover
        });

        // Manually set the active slide based on the state
        carouselInstance.to(activeIndex);

        // Clean up event listeners when the component unmounts
        return () => {
            carouselInstance.pause();
            carouselInstance.dispose();
        };
    }, []);

    return (
        <>
            <section className="py-5 text-center">
                {/* Your existing content */}
                <h1 style={{ color: 'orange', fontWeight: '500' }}  >Testimonials</h1>
            </section>
            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 mx-auto">
                            <div className="p-5 bg-white shadow rounded">
                                {/* Bootstrap carousel */}
                                <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                                    {/* Bootstrap carousel indicators [nav] */}
                                    <ol className="carousel-indicators mb-0">
                                        <li
                                            className={activeIndex === 0 ? 'active' : ''}
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={0}
                                        />
                                        <li
                                            className={activeIndex === 1 ? 'active' : ''}
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={1}
                                        />
                                        <li
                                            className={activeIndex === 2 ? 'active' : ''}
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    {/* Bootstrap inner [slides]*/}
                                    <div className="carousel-inner px-5 pb-4">
                                        {/* Carousel slide 1 */}
                                        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                                            {/* Your content for slide 1 */}
                                            <div className="media">

                                                <div className="media-body ml-3">
                                                    <blockquote className="blockquote border-0 p-0">
                                                        <p className="font-italic lead">
                                                            {" "}
                                                            <i className="fa fa-quote-left mr-3 text-success" />
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua.
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            Someone famous in
                                                            <cite title="Source Title">Source Title</cite>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Carousel slide 2 */}
                                        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                                            {/* Your content for slide 2 */}
                                            <div className="media">

                                                <div className="media-body ml-3">
                                                    <blockquote className="blockquote border-0 p-0">
                                                        <p className="font-italic lead">
                                                            {" "}
                                                            <i className="fa fa-quote-left mr-3 text-success" />
                                                            Fantastic
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            Someone famous in
                                                            <cite title="Source Title">Source Title</cite>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Carousel slide 3 */}
                                        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                                            {/* Your content for slide 3 */}
                                            <div className="media">

                                                <div className="media-body ml-3">
                                                    <blockquote className="blockquote border-0 p-0">
                                                        <p className="font-italic lead">
                                                            {" "}
                                                            <i className="fa fa-quote-left mr-3 text-success" />
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua.
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            Someone famous in
                                                            <cite title="Source Title">Source Title</cite>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bootstrap controls [dots] */}
                                    <a
                                        className="carousel-control-prev width-auto"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="prev"
                                        onClick={handlePrevious}
                                    >
                                        <i className="fa fa-angle-left text-dark text-lg" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a
                                        className="carousel-control-next width-auto"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="next"
                                        onClick={handleNext}
                                    >
                                        <i className="fa fa-angle-right text-dark text-lg" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carousel;
