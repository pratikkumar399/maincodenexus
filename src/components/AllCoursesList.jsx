import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import CourseCard from './CourseCard';
import { Context } from './Context';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SyllabusModal from './SyllabusModal';

const AllCoursesList = () => {
  const { courses, setCourses } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [syllabus, setSyllabus] = useState([]);
  const [courseName, setCourseName] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const openPDF = (pdfURL) => {
    window.open(pdfURL, '_blank');
  };

  const courseCards = courses.map((value, index) => (
    <div style={{ cursor: "pointer", margin: "1rem" }} key={index} onClick={() => openPDF(value.syllabus)}>
      <CourseCard
        image={value.image}
        category={value.category}
        name={value.name}
        type={value.type}
        courseId={value.id}
      />
    </div>
  ));

  return (
    <div>
      {isOpen && <SyllabusModal isOpen={isOpen} onClose={closeModal} syllabus={syllabus} courseName={courseName} />}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> */}
          {courseCards}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AllCoursesList;
