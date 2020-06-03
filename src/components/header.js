import React, { useState, useEffect } from 'react';
import {Navbar, NavLink, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../images/GT_White.png';

function Header () {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
  
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };
        return(
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/gtfintech"><img className="Logo" alt = "" src={logo} width="200" height="40" className="d-inline-block align-top"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                      <Nav.Link className="CL_header_texts"><Link to='/'><strong>About</strong></Link></Nav.Link>
                      <Nav.Link className="CL_header_texts"><Link to='/gtfintech/people'><strong>People</strong></Link></Nav.Link>
                      <Nav.Link className="CL_header_texts"><Link to='/gtfintech/research'><strong>Research </strong></Link></Nav.Link>
                      <Nav.Link className="CL_header_texts"><Link to='/gtfintech/corporateaffiliates'><strong>Corporate Affiliates </strong></Link></Nav.Link>
                      <Nav.Link className="CL_header_texts"><Link to='/gtfintech/qcf'><strong>QCF</strong></Link></Nav.Link>
                      <Nav.Link className="CL_header_texts"><Link to='/gtfintech/news'><strong>News & Events</strong></Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }

    export default Header;