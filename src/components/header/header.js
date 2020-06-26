import React, { useState, useEffect } from 'react';
import {Navbar, NavLink, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../images/GT_White.png';
import './header.css'

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
          <Navbar collapseOnSelect={true} className ="fixed-top" variant="dark" bg ="dark" expand = "lg"> 
                 <Navbar.Brand className = "d-inline p-0 text-white" href ="/gtfintech"><img alt = "" src={logo} width="250" height="45" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                      <NavLink eventKey="1" className="CL_header_texts"><Link to='/'><strong>About</strong></Link></NavLink>
                      <NavLink eventKey="2" className="CL_header_texts"><Link to='/gtfintech/people'><strong>People</strong></Link></NavLink>
                      <NavDropdown eventKey="6" className="CL_header_texts" title= {<strong className = 'text-white'>Research</strong>} id="basic-nav-dropdown">
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="7"><Link to='/gtfintech/research/covid'><strong>COVID-19</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="8"><Link to='/gtfintech/research/householdfinance'><strong>Household Finance</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="9"><Link to='/gtfintech/research/fintech'><strong>Fintech & Innovation</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="10"><Link to='/gtfintech/research/responsiblefinance'><strong>Responsible Finance</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="11"><Link to='/gtfintech/research/trading'><strong>Trading Strategies</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="12"><Link to='/gtfintech/research/creditrisk'><strong>Credit Risk</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="13"><Link to='/gtfintech/research/MLandFinance'><strong>Machine Learning</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="14"><Link to='/gtfintech/research/NLPandFinance'><strong>Natural Language Processing</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="15"><Link to='/gtfintech/research/fixedincome'><strong>Fixed Income</strong></Link></NavDropdown.Item>
                        <NavDropdown.Item className="CL_dropdown_texts" eventKey="16"><Link to='/gtfintech/research/banking'><strong>Banking</strong></Link></NavDropdown.Item>
                      </NavDropdown>
                      <NavLink eventKey="3" className="CL_header_texts"><Link to='/gtfintech/corporateaffiliates'><strong>Corporate Affiliates </strong></Link></NavLink>
                      <NavLink eventKey="4" className="CL_header_texts"><Link to='/gtfintech/qcf'><strong>QCF</strong></Link></NavLink>
                      <NavLink eventKey="17" className="CL_header_texts"><Link to='/gtfintech/data'><strong>Data</strong></Link></NavLink>
                      <NavLink eventKey="5" className="CL_header_texts"><Link to='/gtfintech/news'><strong>News & Events</strong></Link></NavLink>
                      <NavLink eventKey="18" className="CL_header_texts"><Link to='/gtfintech/contactus'><strong>Contact Us</strong></Link></NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }

    export default Header;