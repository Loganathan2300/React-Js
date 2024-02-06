import React from "react";
//import "../../css/Header.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../Assest/Angadi logo1.png"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Heading() {
  return (
    <div className="header bg-dark ">
      <nav className="navbar navbar-expand-lg position-sticky">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#"> 
          <img src={Logo} alt="FTS Logo" width="60" height="40"></img>
          FTS Academy </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#"> Home</a>
                {/* active is befor of the color give it */}
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Menu</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Dropdown </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://maps.google.com/">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item"href="https://maps.google.com/"> Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"> Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#" > Disabled</a>    
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-white" type="submit"> Search </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
        
      );
    }


export default Heading;

 // <>
    //   <Navbar expand="lg" className="bg ">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </>