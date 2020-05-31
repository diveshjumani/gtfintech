import React, { useState, useEffect } from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
import { FaBars } from 'react-icons/fa';
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
                    <Nav.Link href="/gtfintech">About</Nav.Link>
                    <Nav.Link href="/gtfintech/people">People</Nav.Link>
                    <Nav.Link href="/gtfintech/research"> Research </Nav.Link>
                    {/* <NavDropdown title="Research" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/gtfintech/research/banking">Banking</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/gtfintech/corporateaffiliates">Corporate Affiliates</Nav.Link>
                    <Nav.Link href="/gtfintech/qcf">QCF</Nav.Link>
                    <Nav.Link href="/gtfintech/news">News & Events</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }

    export default Header;