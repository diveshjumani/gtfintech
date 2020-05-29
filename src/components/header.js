import React, { useState, useEffect } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import logo from '../images/GT_White.png';
import { CSSTransition } from "react-transition-group";
import { FaBars } from 'react-icons/fa';

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
            <Navbar bg="dark" expand = "lg" fixed="top" className="Header">
                <Navbar.Brand to ="/"><img className="Logo" alt = "" src={logo} width="200" height="40" className="d-inline-block align-top"/></Navbar.Brand>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                       <Nav className="mr-auto Nav">
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech">About</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech/people">People</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech/research">Research</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech/events">Events</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech/corporateaffiliates">Corporate Affiliates</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech/qcf">QCF</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/gtfintech/news">News</NavLink>
                        </Nav>
                        </CSSTransition>
                            <button onClick={toggleNav} className="Burger">
                                <FaBars />
                            </button>
            </Navbar>
        );
    }

    export default Header;