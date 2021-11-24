import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const activeStyle = {
    backgroundColor: "transparent",
    color: "#fff",
    borderRight:"3px solid #223ac4",
    borderBottom:"3px solid #223ac4",
    borderRadius: "8px"
  }

  return (
    <div>
      {/* navbar part start */}
      <Navbar expand="lg" className="main-navigation w-100">
        <Container className="main-navigation-container">
          <Navbar.Brand href="/home" className="brand-logo"> <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/logo.png" width="120px" alt="Brand Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="brand-bg mx-auto mb-3" />
              <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="ms-auto">
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/home">Home</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/about">About</NavLink>
                  <NavLink className="navbar-link explore-pd" to="/explore">Explore</NavLink>

                  {
                    user.email && 
                    <NavLink activeStyle={activeStyle} className="me-2 navbar-link" to="/dashboard">Dashboard</NavLink> 
                  }
                  
                  {
                    user.email ?  
                    <div>
                    <span className="fw-bold text-primary user-name" style={{fontSize:"18px"}}>{user.displayName}</span>                  
                    <Button onClick={logout} className="navbar-link bg-danger logout-btn">Logout</Button></div>
                        :
                    <div>
                      <NavLink activeStyle={activeStyle} className="navbar-link" to="/login">Login</NavLink> 
                      <NavLink activeStyle={activeStyle} className="navbar-link" to="/register">Register</NavLink> 
                    </div>
                  }     
                          
              </Nav>
          </Navbar.Collapse> 
        </Container>         
      </Navbar>
    </div>
  );
};

export default Header;

// <span className="heading-font text-primary">Comfort Car Palace</span>