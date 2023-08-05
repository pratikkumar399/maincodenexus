import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import CourseCard from './CourseCard';
import { Context } from './Context';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const AllCourses = () => {
  const { courses, setCourses } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);
  const [coursesPerPage, setCoursesPerPage] = useState(3); // Initial value for larger screens

  const handleNextPage = () => {
    const lastPage = Math.ceil(courses.length / coursesPerPage) - 1;
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const updateCoursesPerPage = () => {
      // Adjust courses per page based on screen width
      if (window.innerWidth <= 576) {
        setCoursesPerPage(1); // For mobile devices, load one card per page
      } else if (window.innerWidth <= 1200) {
        setCoursesPerPage(2); // For smaller screens, load two cards per page
      } else {
        setCoursesPerPage(3);
      }
    };

    // Update courses per page on window resize
    window.addEventListener('resize', updateCoursesPerPage);
    updateCoursesPerPage();

    return () => {
      window.removeEventListener('resize', updateCoursesPerPage);
    };
  }, []);

  const startIndex = currentPage * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const visibleCourses = courses.slice(startIndex, endIndex).slice(0, coursesPerPage);

  const openPDF = (pdfURL) => {
    window.open(pdfURL, '_blank');
  };

  const courseCards = visibleCourses.map((value, index) => (
    <div style={{ cursor: "pointer" }} key={index} onClick={() => openPDF(value.syllabus)}>
      <CourseCard
        image={value.image}
        category={value.category}
        name={value.name}
        type={value.type}
        courseId={value.id}
      />
    </div>
  ));

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        </div>
        {courseCards}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem" }}>
          <button onClick={handlePrevPage} disabled={currentPage === 0} style={{ border: "3px solid grey", borderRadius: "50%", marginRight: "2rem" }}>
            <BsChevronLeft />
          </button>
          <p style={{ fontSize: "16px", color: "#535458", fontFamily: "sans-serif" }}>
            Page no. {currentPage + 1} / {totalPages}
          </p>
          <button onClick={handleNextPage} disabled={(currentPage + 1) * coursesPerPage >= courses.length} style={{ border: "3px solid grey", borderRadius: "50%", marginLeft: "2rem" }}>
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
