// MyContext.js
import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  return (
    <Context.Provider value={{ courses, setCourses, allCourses, setAllCourses }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
