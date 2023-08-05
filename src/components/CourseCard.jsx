import React, { useState } from 'react';
import { FaStar, FaRegBook } from 'react-icons/fa';
import { Icon } from 'react-icons-kit';
import { book } from 'react-icons-kit/icomoon/book';

function CourseCard({ name, image, type, category, courseId }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const bgColor = (type === "Testing") ? "#3B60FF" : (type === "Development") ? "#B128FF" : "#30A820";

  return (
    <div style={{ width: "336px", backgroundColor: "white", borderRadius: "0.5rem" }}>
      <div
        style={{ height: "200px", width: "100%", display: "flex", padding: "1rem"}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p style = {{zIndex: "999", position: "absolute", backgroundColor: bgColor, color: "white", padding: "0px 10px", borderRadius: "5px", margin: "20px 10px"}}>{type}</p>
        <img src={image} alt="image" style={{ border: "8px solid #d5d5d5", height: "100%", width: "100%", transition: "transform 0.3s", transform: isHovered ? "scale(1.08)" : "scale(1)"}}/>
      </div>
      <div className='container'>
        
        <div style = {{display: "flex", justifyContent: "center", alignItems: "center", padding: "0.5rem"}}>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
