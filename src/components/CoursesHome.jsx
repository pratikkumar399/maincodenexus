import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import CourseCard from './CourseCard';
import { Context } from './Context';
import AllCourses from './AllCourses'
import CoursesNavbar from './CoursesNavbar'
import { Link } from 'react-router-dom';

function CoursesHome() {

  const { courses, setCourses, setAllCourses } = useContext(Context);
  
  useEffect(() => {
    function fetchCourses() {
      const collectionRef = collection(db, "courses");

      getDocs(collectionRef)
        .then((querySnapshot) => {
          const allcourses = [];
          querySnapshot.forEach((doc) => {
            const data = {id: doc.id, ...doc.data()};
            // console.log(data.id);
            allcourses.push(data);
          });

          setCourses(allcourses);
          setAllCourses(allcourses)
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    }
    fetchCourses();
  }, [])

  return (
    <div style = {{backgroundColor: "#EDEEF3", paddingTop: "6rem", paddingBottom: "6rem"}}>
        <div className='container'>
            <div style = {{paddingBottom: "4rem"}}>
                <h2 style = {{fontSize: "35px", fontWeight: "bolder"}}>Find The Right <br></br> Online Course For You</h2>
                <p style = {{fontSize: "16px", color: "#535458", fontFamily: "sans-serif"}}>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            <CoursesNavbar />
            <AllCourses />
            <div style = {{marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Link to = "/courses"><button className = "btn btn-primary">See All</button></Link>
            </div>
        </div>
    </div>
  )
}

export default CoursesHome