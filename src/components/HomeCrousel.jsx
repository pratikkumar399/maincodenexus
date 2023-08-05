import React, { useState } from 'react';
import pageTitleShape from "../images/page-title-shape.png";
import contactImage from "../images/contact-shape.png";
import readingImg from "../images/readingImg.png";
import RegistrationModal from './RegistrationModal';

function HomeCrousel() {

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const openModal = () => {
        setIsRegisterOpen(true);
    };

    const closeModal = () => {
        setIsRegisterOpen(false);
    };


    return (
        // <div style={{ minHeight: "100vh", backgroundColor: "#EDEEF3" }}>
        //     <img src={contactImage} style={{ position: "absolute" }} alt='123' />
        //     <div className="mb-3 container" style={{ paddingTop: "3rem" }}>
        //         <div className="row g-0">
        //             <div className="image-container col-md-6">
        //                 <div>
        //                     <img
        //                         className="rotate-image"
        //                         src={pageTitleShape}
        //                         alt="Rotating Image1"
        //                     />
        //                 </div>
        //                 <div>
        //                     <span className="text-dark display-5">Unlock</span>
        //                     <br />
        //                     <span className="h1" style={{ fontSize: "3rem" }}>Your Coding Skills.</span>
        //                     <p className="fontSans text-bold crousel-text">With Expert-led Software Training...🏆</p>
        //                     <p className="fontSans text-bold crousel-text">Join Us To Learn Programming📝</p>
        //                     <p className="fontSans text-bold crousel-text">Mobile dev, Web dev etc...💰</p>
        //<                      button className="btn btn-primary register-btn" onClick={openModal}>Register Now</>
        //                     <RegistrationModal isOpen={isRegisterOpen} onClose={closeModal} />
        //                 </div>
        //                 <div>
        //                 </div>
        //             </div>
        //             <div className="col-md-6">
        //                 <div className="card-body">
        //                     <div className="reading-image-container">
        //                         <img src={readingImg} alt="" className="reading-image" />
        //                         <div className="dot"></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container-fluid px-4 py-5 my-5 text-center">
            <div className="lc-block mb-4">
                <div editable="rich">
                    <h2 className="display-2 fw-bold">
                        Level up your <span className="text-primary">Coding Skills!</span>
                    </h2>
                </div>
            </div>
            <div className="lc-block col-lg-6 mx-auto mb-5">
                <div editable="rich">
                    <p className=" fontSans lead text-bold">
                        With Expert-led Software Training...🏆
                    </p>
                    <p className="fontSans text-bold crousel-text">Join Us To Learn Programming📝</p>
                    <p className="fontSans text-bold crousel-text">Mobile dev, Web dev etc...💰</p>
                </div>
            </div>
            <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                {" "}
                <button className="btn btn-primary register-btn" onClick={openModal}>Register Now</button>
                <RegistrationModal isOpen={isRegisterOpen} onClose={closeModal} />
            </div>
            <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
                <img
                    className="img-fluid"
                    src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg"
                    width=""
                    height={783}
                    srcSet=""
                    sizes=""
                    alt=""
                />
            </div>
        </div>


    );
}

export default HomeCrousel;
