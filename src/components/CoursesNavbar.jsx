import React, { useState, useContext } from 'react'
import { Context } from './Context';

function CoursesNavbar() {
    const [current, setCurrent] = useState(1);
    const { allCourses, setCourses } = useContext(Context);

    const loadFeatured = () => {
        let len = allCourses.length;
        let tempCoursesList = [];
        for (let i = 0; i < len; i++) {
            if (allCourses[i].category === "Featured") {
                tempCoursesList.push(allCourses[i]);
            }
        }
        setCourses(tempCoursesList);
        setCurrent(4);
    }
    const loadTrending = () => {
        let len = allCourses.length;
        let tempCoursesList = [];
        for (let i = 0; i < len; i++) {
            if (allCourses[i].category === "Trending") {
                tempCoursesList.push(allCourses[i]);
            }
        }
        setCourses(tempCoursesList);
        setCurrent(3);
    }
    const loadPopulrity = () => {
        let len = allCourses.length;
        let tempCoursesList = [];
        for (let i = 0; i < len; i++) {
            if (allCourses[i].category === "Popularity") {
                tempCoursesList.push(allCourses[i]);
            }
        }
        setCourses(tempCoursesList);
        setCurrent(2);
    }
    const loadAll = () => {
        setCourses(allCourses)
        setCurrent(1);
    }

  return (
    <div style = {{display: "flex", marginBottom: "5rem"}}>
        <p style = {{color: (current == 1 ? "blue" : "") , marginRight: "2rem", cursor: "pointer", fontSize: "20px", fontFamily: "sans-serif", fontWeight: "bold"}} onClick={loadAll}>See All</p>
        <p style = {{color: (current == 2 ? "blue" : ""), marginRight: "2rem", cursor: "pointer", fontSize: "20px", fontFamily: "sans-serif", fontWeight: "bolder"}} onClick={loadPopulrity}>Popularity</p>
        <p style = {{color: (current == 3 ? "blue" : ""), marginRight: "2rem", cursor: "pointer", fontSize: "20px", fontFamily: "sans-serif", fontWeight: "bolder"}} onClick = {loadTrending}>Trending</p>
        <p style = {{color: (current == 4 ? "blue" : ""), cursor: "pointer", fontSize: "20px", fontFamily: "sans-serif", fontWeight: "bolder"}} onClick={loadFeatured}>Featured</p>
    </div>
  )
}

export default CoursesNavbar