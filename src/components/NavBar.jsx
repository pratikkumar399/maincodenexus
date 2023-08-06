import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { NavDropdown } from 'react-bootstrap';
import logo from "../images/logo.png"
// import './NavBar.css';
import DemoModal from './DemoModal';

// function NavBar() {

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const onClose = () => setIsModalOpen(false);
//   return (
//     <div>
//       {isModalOpen && <DemoModal isOpen={isModalOpen} onClose={onClose}/>}
//       <nav className="navbar navbar-expand-lg bg-white navbar-custom fixed-top shadow" style = {{height: "6rem"}}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             {/* <div style = {{width: "50%"}}> */}
//               <img style = {{height: "3rem"}} className="navbar-logo" src={logo} alt="Image" /> 
//             {/* </div> */}
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item p-3">
//                 <Link className="nav-link active" to="/">Home</Link>
//               </li>
//               <li className="nav-item p-3">
//               <Link className="nav-link active" to="/courses">Courses</Link>
//               </li>
//               <li className="nav-item p-3">
//                 <Link className="nav-link active" to="/contact">Contact Us</Link>
//               </li>
//               <li className="nav-item p-3"><a className="nav-link active" target = "_blank" href = "https://blog.codenexusindia.com/">Blog</a></li>
//               <li className="nav-item p-3"><a className="nav-link active" target = "_blank" href = "https://birtacademy.com/">Practice</a></li>
//             </ul>
//             <div className="ms-auto" style={{ marginRight: "auto" }}>
//               <button className="btn btn-primary text-uppercase p-3" onClick={() => setIsModalOpen(true)}>
//                 <span style={{ fontWeight: "bold" }}>Book A Free Demo Class</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;
import React from 'react'
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => setIsModalOpen(false);
  return (
    <>
      {isModalOpen && <DemoModal isOpen={isModalOpen} onClose={onClose} />}

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <div style={{ width: "50%" }}>
              <img style={{ height: "3rem" }} className="navbar-logo" src={logo} alt="Image1" />
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* means */}
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/home" style={{ fontWeight: '400', color: 'orange' }}  >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses" style={{ fontWeight: '400', color: 'purple' }} >Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ fontWeight: '400', color: 'purple' }} >Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ fontWeight: '400', color: 'purple' }} >About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/internship" style={{ fontWeight: '400', color: 'purple' }} >Internship</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" target="_blank" to="https://blog.codenexusindia.com/" style={{ fontWeight: '400', color: 'purple' }}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" target="_blank" to="https://birtacademy.com/" style={{ fontWeight: '400', color: 'purple' }} >Practice</Link>

              </li>
              <div className="mx-3">
                <Button className='btn btn-warning' onClick={() => setIsModalOpen(true)} >Register Now</Button>{' '}
              </div>

            </ul>
          </div>
          {/* end */}
        </div>
      </nav>
    </>
  )
}

export default Navbar