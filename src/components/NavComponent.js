import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Spinner } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const backEndUrl = "https://oneshotback.herokuapp.com"

const Navi = (props) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    axios.get(backEndUrl + `/api/logout`)
    .then(res => {
      console.log(res.data);
      props.logoutToggler();
      console.log("Logout pressed")
      console.log(props.isLoggedIn)
      setIsLoading(false);
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
              <NavLink className="nav-link" to="/home" ><h5 className="headfont my-auto text-7">Home</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/courses" ><h5 className="headfont my-auto text-7">Courses</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/about" ><h5 className="headfont my-auto text-7">About Us</h5></NavLink>
            </NavItem>
            <div className="d-none d-md-block">
              <NavItem className="ml-1 mr-5">
                <NavLink className="nav-link pill" to="/signup" ><h5 className="headfont my-auto text-7">Sign Up</h5></NavLink>
              </NavItem>
            </div>
            <div className="d-block d-md-none">
              <NavItem className="ml-4 mr-5">
                <NavLink className="nav-link pill" to="/signup" ><h5 className="headfont my-auto text-7">Sign Up</h5></NavLink>
              </NavItem>
            </div>
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
              <NavLink className="nav-link" to="/home"><h5 className="headfont my-auto text-7">Home</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/courses"><h5 className="headfont my-auto text-7">Courses</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/about"><h5 className="headfont my-auto text-7">About Us</h5></NavLink>
            </NavItem>
            <NavItem className="ml-4 mr-5">
              <NavLink className="nav-link" to="/account"><h5 className="headfont my-auto text-7">My Account</h5></NavLink>
            </NavItem>
            { isLoading ? <div className="ml-1 mr-5"><div className="nav-link my-auto"><Spinner color="primary" size="sm"/></div></div> :
              <div>
                <div className="d-none d-md-block">
                  <NavItem className="ml-1 mr-5">
                    <NavLink className="nav-link pill" to="/home" onClick={handleLogout}><h5 className="headfont my-auto text-7">Log Out</h5></NavLink>
                  </NavItem>
                </div>
                <div className="d-block d-md-none">
                  <NavItem className="ml-4 mr-5">
                    <NavLink className="nav-link pill" to="/home" onClick={handleLogout}><h5 className="headfont my-auto text-7">Log Out</h5></NavLink>
                  </NavItem>
                </div>
              </div>
            }
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