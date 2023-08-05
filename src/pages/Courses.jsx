/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { Context } from '../components/Context';
import CoursesNavbar from '../components/CoursesNavbar'
import AllCoursesList from '../components/AllCoursesList';

function Courses() {

  const { setCourses, setAllCourses } = useContext(Context);

  useEffect(() => {
    function fetchCourses() {
      const collectionRef = collection(db, "courses");

      getDocs(collectionRef)
        .then((querySnapshot) => {
          const allcourses = [];
          querySnapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() };
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
    <div style={{ backgroundColor: "#EDEEF3", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className='container'>
        <div style={{ paddingBottom: "4rem" }}>
          <h2 style={{ fontSize: "35px", fontWeight: "bolder" }}>Find The Right <br></br> Online Course For You</h2>
          <p style={{ fontSize: "16px", color: "#535458", fontFamily: "sans-serif" }}>You don't have to struggle alone, you've got our assistance and help.</p>
        </div>
        <CoursesNavbar />
        {/* <AllCourses /> */}
        <AllCoursesList />
      </div>
    </div>
  )
}

export default Courses