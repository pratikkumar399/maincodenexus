import React, { useState } from "react"
import { Link } from "react-router-dom";
import photo1 from "../images/banner-img-1.png"
import photo2 from "../images/banner-img-2.png"
import "./Banners.css"
import DemoModal from "./DemoModal";

const Banners = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onClose = () => setIsModalOpen(false);
    return (
        <div className="bannerContainer">
            {isModalOpen && <DemoModal isOpen={isModalOpen} onClose={onClose}/>}
            <div style = {{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", width: "100vw"}} className="container">
                <div style = {{display: "flex", borderRadius: "10px", padding: "2rem", marginTop: "1rem"}} className = "firstBanner">
                    <div style = {{display: "flex"}}>
                        <div style = {{padding: "", width: "12rem"}} className = "bannercontent">
                            <span style = {{padding: "4px 14px 5px 14px", backgroundColor: "#FF652E", borderRadius: "50%", color: "white", fontWeight: "bolder"}}>Free</span>
                            <Link to = "/" style = {{fontSize: "26px", fontWeight: "bolder", textDecoration: "none"}}><p style = {{ marginTop: "1.5rem"}}>Book A Free Demo Class Now</p></Link>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style = {{marginTop: "3rem"}}>Book Now</button>
                        </div>
                        <div className="firstImg" style = {{width: "18rem"}}>
                            <img src={photo1} alt="" />
                        </div>
                    </div>
                </div>
                <div style = {{display: "flex", borderRadius: "10px", padding: "2rem", marginTop: "1rem"}} className = "secondBanner">
                    <div style = {{display: "flex"}}>
                        <div style = {{padding: "", width: "12rem"}} className = "bannercontent">
                            <span style = {{padding: "4px 14px 5px 14px", backgroundColor: "#FF652E", borderRadius: "50%", color: "white", fontWeight: "bolder"}}>New</span>
                            <Link to = "/" style = {{fontSize: "26px", fontWeight: "bolder", textDecoration: "none"}}><p style = {{ marginTop: "1.5rem"}}>Assess Our Courses From Anywhere</p></Link>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style = {{marginTop: "3rem"}}>Find Out More</button>
                        </div>
                        <div className="secondImg" style = {{width: "18rem"}}>
                            <img src={photo2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banners;