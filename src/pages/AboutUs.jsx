import React from 'react'
import { Link } from 'react-router-dom'
import aboutus from '../images/aboutusit.jpg'
import './AboutUs.css'
import Carousel from '../components/Carousel'
import AboutusCards from '../utils/AboutusCards'

const AboutUs = () => {
    return (
        <>
            <div
                className="d-flex container-fluid "
                lc-helper="background"
                style={{
                    height: "80vh",
                    background:
                        `url(${aboutus})  center / cover no-repeat`
                }}
            ></div>
            <div className="container p-5 bg-light hello_font" style={{ marginTop: "-100px" }}>
                <div className="row">
                    {/* /col */}
                    <div className=" mx-4 col-md-12">
                        <div className="lc-block ">
                            <div editable="rich">
                                <p className="display-4">
                                    CodeNexus A Global Training Institute
                                </p>
                            </div>
                        </div>
                        {/* /lc-block */}
                    </div>
                    {/* /col */}
                </div>
                <div className="row">
                    <div className="col-md-9 offset-md-1">
                        <div className="lc-block mt-5">
                            <div editable="rich">
                                <p className="lead text-secondary">
                                    {" "}
                                    At codenexus we offer IT software courses. The purpose of our training programs is to prepare our upcoming IT software engineers for a successful career in the IT industry. &nbsp;
                                </p>
                                <p className="lead text-secondary">
                                    For the accomplishment of this aim we proceed from various steps like doubt sessions our held after class hours which allows students to remove their hurdle point for moving further.{" "}
                                </p>
                            </div>
                        </div>
                        {/* /lc-block */}
                    </div>


                    {/* /col */}
                </div>

            </div>
            <div className='m-5 hello_font' >
                <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    What CODENEXUS Does?
                </li>
                <p className='mx-2 px-4' >

                    <div style={{ marginTop: "25px" }} >  </div>

                    <span style={{ fontWeight: '550', color: 'orange' }} > At codenexus </span>

                    we offer IT software courses. The purpose of our training programs is to prepare our upcoming IT software engineers for a successful career in the IT industry. Let us help you achieve your IT goals.  We have a proper way to start your IT journey at codenexus. Providing super enhanced training to students is the responsibility of our highly skilled trainers and IT professionals because we believe our students are future of upcoming It industry so training valuable resources for future is our prior aim. For the accomplishment of this aim we proceed from various steps like doubt sessions our held after class hours which allows students to remove their hurdle point for moving further.

                    <div style={{ marginTop: "25px" }} >  </div>



                    For future job references, we provide certificates showing our IT champs' academic performance after they have completed the courses. And also Codenexus provides a student placement platform to support students' career aspirations and helps to get placed in top MNCs in very limited time span having higher packages. Also we give lifetime support.

                    <div style={{ marginTop: "25px" }} >  </div>


                </p>


                <div style={{ marginTop: "25px" }} >  </div>


                <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    Why Choose Us?
                </li>
                <div style={{ marginTop: "25px" }} >  </div>
                <p className=' mx-2 px-4' >
                    CodeNexus constructs Future. Our recipe of progress is the establishment of the conviction that there is a boss in each understudy standing by to be found. Since its initiation, CodeNexus has attempted to bring the best whether they are the most famous mentors, the most exhaustive investigation material, or the exceptional preparing system. We guarantee and keep on being the main Business Analyst and Digital Training Institutes, in Noida wide among the rest with all our students.
                    <div style={{ marginTop: "25px" }} >  </div>
                    Here is what we give our It champions:
                    <p className=' mx-2 px-4' >


                        <div style={{ marginTop: "25px" }} >  </div>
                        <li>Innovation</li>
                        <li>Expert Team</li>
                        <li>Quality Assurance</li>
                        <li>24/7 Lifetime support</li>
                        <li>Free demo class before enrollment</li>
                        <li>100% Placement assistance in top MNCs </li>
                    </p>
                    <div style={{ marginTop: "25px" }} >  </div>
                    We are passionate about educating our upcoming youth and generations about software engineering and securing their high paying jobs in IT sector. We believe in staying ahead of the curve and continuously improving our courses as per changes in trends in real world. Innovation is at the core of what we do. Our rigorous quality assurance processes ensure that every program or course knowledge that we deliver is of the highest standard and meets industry best practices. Our team of committed experts works to address our students' needs pertaining to any specific issue and aids them in achieving their objectives in software engineering in a program or courses chosen by them.
                    <div style={{ marginTop: "25px" }} >  </div>
                </p>
                <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    Who We Are?
                </li>
                <div style={{ marginTop: "25px" }} >  </div>
                <p className=' mx-2 px-4' >
                    Welcome to Codenexus One of the leading IT software training institutes in Delhi NCR! Codenexus is a Registered Software Training Institute. We train scholars of both belongings from local regions as well as from all over the PAN India for a variety of nationally recognized professional IT software courses.
                    <div style={{ marginTop: "25px" }} >  </div>

                    On your enrollment with us, you'll be given opportunity to join hundreds of other IT job searchers and professionals who have been placed at top MNCs and have been promoted after completion of training with us. We provide a proposal of training to boost and develop our scholar’s IT Skills that would make them grow faster in their career and help them to stand out from the crowd. Our modernized and smooth-running course delivery model, we ensure that you thoroughly learn the information given by us and develop useful skills in your chosen courses.
                    <div style={{ marginTop: "25px" }} >  </div>
                </p>

                <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    Who We Are?
                </li>
                <div style={{ marginTop: "25px" }} >  </div>
                <p className=' mx-2 px-4' >
                    At Codenexus, we offer top-recognized software IT courses. Our programs are designed to equip students with the tools they need to achieve success in the future. Whether you are a recent college graduate or an experienced IT professional, completing our certificates and programs can help you to move further your career. We have just the right solution for your IT needs so don't wait any longer - book a demo class now by clicking the link below!
                    <div style={{ marginTop: "25px" }} >  </div>
                </p>
                <div style={{ marginTop: "25px" }} >  </div>

                <h1>Our Values</h1>
                <p>
                    <div className=' mx-2 px-4'>
                        <li>  <span style={{ fontWeight: "bold", textDecoration: "underline" }}> Integrity:</span>  We conduct our business with the utmost integrity, honesty, and transparency.</li>
                        <li> <span style={{ fontWeight: "bold", textDecoration: "underline" }}> Excellence:</span> We pursue excellence in our work we do, pushing the boundaries to deliver exceptional results.</li>
                        <li><span style={{ fontWeight: "bold", textDecoration: "underline" }}> Customer-Centric:</span> Our customers are at the heart of our business. We actively listen to their needs and provide personalized solutions.</li>
                        <li><span style={{ fontWeight: "bold", textDecoration: "underline" }}> Collaboration:</span> Collaboration is the key to our success. We work together as a cohesive team and foster strong partnerships with our clients.</li>
                    </div>
                </p>

            </div >
            <AboutusCards />
            <div style={{ marginTop: "75px" }} >  </div>
            <Carousel />

        </>

    )
}

export default AboutUs
