import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';
import { ContextProvider } from './components/Context';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <div>
      {/* <AddCourse /> */}
      {/* <PlacedInput /> */}
      <div style={{ marginBottom: "4.5rem" }}>
        <NavBar />
      </div>
      <ContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </ContextProvider>
      <Footer />
    </div>

  );
}

export default App;