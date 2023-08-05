import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, startAfter, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import CourseCard from './CourseCard';
import Banners from './Banners';

function Brands() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const collectionRef = collection(db, "brands"); // Replace 'brands' with the actual collection name

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const urls = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          urls.push(data); // Assuming the image URL field is named 'imageUrl'
        });
        console.log(urls)
        setImageUrls(urls);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  console.log(imageUrls);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 10) % imageUrls.length;
        return newIndex;
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, [imageUrls]);
  
  const visibleImages = imageUrls.length <= 10
    ? [...imageUrls, ...imageUrls].slice(currentIndex, currentIndex + 10)
    : imageUrls.slice(currentIndex, currentIndex + 10);
  
  // Adjust the rendering based on the number of visible images
  const allImages = visibleImages.map((url) => (
    <div className="card" key={url} style={{ border: "none", height: "150px", width: "210px"}}>
      <img
        src={url.image}
        alt="Firebase Image"
        className="card-img-top"
        style={{ maxHeight: "5rem", width: "auto", objectFit: "fill" }}
      />
    </div>
  ));
  
  if (allImages.length < 10) {
    const remaining = 10 - allImages.length;
    const extraImages = imageUrls.slice(0, remaining);
    allImages.push(
      ...extraImages.map((url) => (
        <div className="card" key={url} style={{ border: "none", height: "150px", width: "210px"}}>
          <img
            src={url.image}
            alt="Firebase Image"
            className="card-img-top"
            style={{ maxHeight: "5rem", width: "auto", objectFit: "fill" }}
          />
        </div>
      ))
    );
  }
  

  return (
    <div style = {{backgroundColor: "white", padding: "0.5rem 0rem 3rem 0rem"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "4rem 0rem 4rem 0rem", fontWeight: "bolder" }}>
        <h2>Our Students Placed in TOP MNCs.</h2>
      </div>
      <div className="container">
        <div
          className=""
          style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", minHeight: "30rem" }}
        >
          {allImages}
        </div>
      </div>
      <Banners />
      {/* <CourseCard image = "https://codenexusindia.com/assets/img/course/course-4.jpg" lessions="60" star = "4.5" name = "Learn Manual Software Testing + Agile with Jira Tool." type = "testing" /> */}
    </div>
  );
}

export default Brands;
