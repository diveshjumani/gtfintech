import React, { Component } from 'react';
import {Navbar,NavLink,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../images/GT_White.png';

class MainResearchNavbar extends Component {
    render(){
        return (
            <Navbar className ="second-navbar researchnav sticky-top" collapseOnSelect variant="dark" bg ="warning" expand = "lg"> 
                 <Navbar.Brand className = "d-inline p-0 text-white" to ="/gtfintech/research"><img alt = "" src={logo} width="0" height="35"></img><strong>Research</strong></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="covid" to="covid" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>COVID-19</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="hfin" to="hfin" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>Household Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="fintech" to="fintech" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>FinTech and Innovation</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="rfin" to="rfin" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>Responsible Finance</strong>
                                </Link>
                                </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="trading" to="trading" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>Trading Strategies</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="creditrisk" to="creditrisk" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>Credit Risk</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="MLfin" to="MLfin" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>ML and Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="NLPFin" to="NLPFin" offset ={-102} spy={true} smooth={true} duration={500} >
                                   <strong> NLP and Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="FI" to="FI" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>Fixed Income</strong>
                                </Link>
                                </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="banking" to="banking" offset ={-102} spy={true} smooth={true} duration={500} >
                                    <strong>Banking</strong>
                                </Link>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                 </Navbar>
            );
  }
}

export default MainResearchNavbar;