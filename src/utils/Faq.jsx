import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };

    const questions = [
        {
            question: 'Do you provide any free plan?',
            answer:
                'Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.',
        },
        {
            question: 'How to claim your 25% discount offer?',
            answer:
                'Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.',
        },
        {
            question: "What's your refund policy?",
            answer:
                'Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.',
        },
        {
            question: 'How to get support for the product?',
            answer:
                'Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.',
        },
    ];

    return (
        <section className="py-12 py-sm-24 bg-info-light">
            <div className="container">
                <div className="mb-16 text-center">
                    <span className="fs-9 fw-semibold text-primary text-uppercase">HAVE ANY QUESTIONS?</span>
                    <h2 className="mt-8 mb-0">Frequently Asked Questions</h2>
                </div>
                <div className="mw-3xl mx-auto">
                    {questions.map((q, index) => (
                        <button
                            key={index}
                            className={`btn p-8 mb-2 w-100 bg-white fw-medium text-start lh-base rounded-4 border ${activeQuestion === index ? 'border-primary' : 'border-primary-light'
                                }`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="fs-7 mb-0">{q.question}</h6>
                                </div>
                                <div className="ps-4">
                                    <svg
                                        width={14}
                                        height={9}
                                        viewBox="0 0 14 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.8327 1.5L6.99935 7.33333L1.16602 1.5"
                                            stroke={activeQuestion === index ? '#4F46E5' : '#111827'}
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className={`mw-md mt-4 mb-0 text-secondary ${activeQuestion === index ? '' : 'd-none'}`}>
                                {q.answer}
                            </p>
                        </button>
                    ))}
                    <p className="d-flex flex-wrap align-items-center justify-content-center">
                        <span className="me-1">Still have any questions?</span>
                        <Link className="btn px-0 btn-link fw-bold" to="/contact">
                            Contact us
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
