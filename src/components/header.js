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
          <Navbar className ="fixed-top" collapseOnSelect variant="dark" bg ="dark" expand = "lg"> 
                 <Navbar.Brand className = "d-inline p-0 text-white" href ="/gtfintech"><img alt = "" src={logo} width="200" height="35" /></Navbar.Brand>
            {/* // <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark"  className="CL_height_navbar">
            //   <Navbar.Brand href="/gtfintech"><img className="Logo " alt = "" src={logo} width="200" height="40" className="d-inline-block align-top"/></Navbar.Brand> */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                      <NavLink className="CL_header_texts"><Link to='/'><strong>About</strong></Link></NavLink>
                      <NavLink className="CL_header_texts"><Link to='/gtfintech/people'><strong>People</strong></Link></NavLink>
                      <NavDropdown className="CL_header_texts" title= {<Link to='/gtfintech/research'><strong className = 'text-white'>Research</strong></Link>} id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/gtfintech/research/covid'><strong>COVID-19</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/householdfinance'><strong>Household Finance</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/fintech'><strong>Fintech & Innovation</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/responsiblefinance'><strong>Responsible Finance</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/trading'><strong>Trading Strategies</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/creditrisk'><strong>Credit Risk</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/MLandFinance'><strong>Machine Learning</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/NLPandFinance'><strong>Natural Language Processing</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/fixedincome'><strong>Fixed Income</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/gtfintech/research/banking'><strong>Banking</strong></Link></NavDropdown.Item>
                      </NavDropdown>
                      <NavLink className="CL_header_texts"><Link to='/gtfintech/corporateaffiliates'><strong>Corporate Affiliates </strong></Link></NavLink>
                      <NavLink className="CL_header_texts"><Link to='/gtfintech/qcf'><strong>QCF</strong></Link></NavLink>
                      <NavLink className="CL_header_texts"><Link to='/gtfintech/news'><strong>News & Events</strong></Link></NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }

    export default Header;