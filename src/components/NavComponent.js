import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const backEndUrl = "https://oneshotback.herokuapp.com"

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeClass, setActiveClass] = useState('navbar-transparent');
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        let activeClass = '';
        if((window.scrollY === 0) || (window.scrollY < 0)) {
            activeClass = 'navbar-transparent';
        }
        else {
            activeClass = 'active';
        }
        setActiveClass(activeClass);
     });
  })

  const handleLogout = () => {
    axios.get(backEndUrl + `/api/logout`)
    .then(res => {
      console.log(res.data);
      props.logoutToggler();
      console.log("Logout pressed")
      console.log(props.isLoggedIn)
    })
    .catch(err => console.log("Error caught by handleLogout: " + err.message))
  }

  const NonLoggedInBar = () => {
    return (
        <Navbar light expand="md" sticky={'top'} className={activeClass}>
        <NavbarBrand href="/">
          <img src="/assets/images/logo.png" height="50" width="150" alt="Oneshot Affiliate"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/home"><h5 className="headfont my-auto">Home</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/courses"><h5 className="headfont my-auto">Courses</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/about"><h5 className="headfont my-auto">About Us</h5></NavLink>
            </NavItem>
            <NavItem className="ml-1 mr-5">
              <NavLink className="nav-link pill" to="/signup"><h5 className="headfont my-auto">Sign Up</h5></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  const LoggedInBar = () => {
    return (
        <Navbar light expand="md" sticky={'top'} className={activeClass}>
        <NavbarBrand href="/">
          <img src="/assets/images/logo.png" height="50" width="150" alt="Oneshot Affiliate"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/home"><h5 className="headfont my-auto">Home</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/courses"><h5 className="headfont my-auto">Courses</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/about"><h5 className="headfont my-auto">About Us</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/account"><h5 className="headfont my-auto">My Account</h5></NavLink>
            </NavItem>
            <NavItem className="ml-1 mr-5">
              <NavLink className="nav-link pill" to="/home" onClick={handleLogout}><h5 className="headfont my-auto">Log Out</h5></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  if ((props.isLoggedIn === 'true') || (props.isLoggedIn === true)) {
    return <LoggedInBar/>;
  }
  else {
    return <NonLoggedInBar/>;
  }
  
}

export default Navi;