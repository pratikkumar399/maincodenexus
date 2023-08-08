import React from 'react'
import { Link } from 'react-router-dom'
import './Aboutus.css'
import bannerimg from '../images/banner-img-2.png'
const AboutusCards = ({ info }) => {
    return (

        <div className="card1">
            <img src={bannerimg} alt="" />
            <div className="card__content">
                <p className="card__title">Card Title</p>
                <p className="card__description">
                    {info}
                </p>
            </div>
        </div>

    )
}

export default AboutusCards
