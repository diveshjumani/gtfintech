import React, { Component } from 'react';
import {Navbar,NavLink,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../images/GT_White.png';

class ResearchNavbar extends Component {
    render(){
        return (
            <Navbar className ="second-navbar fixed-top" collapseOnSelect variant="dark" bg ="warning" expand = "lg"> 
                    <Navbar.Brand className = "d-inline p-0 text-white" to ="/gtfintech/research"><img alt = "" src={logo} width="0" height="35"></img><strong>Research</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/covid'>
                                    <strong>COVID-19</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/householdfinance'>
                                <strong>Household Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/fintech'>
                                <strong>FinTech and Innovation</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/responsiblefinance'>
                                <strong>Responsible Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/trading'>
                                <strong>Trading Strategies</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/creditrisk'>
                                <strong>Credit Risk</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/MLandFinance'>
                                <strong>ML and Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/NLPandFinance'>
                                <strong>NLP and Finance</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/fixedincome'>
                                <strong>Fixed Income</strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link to='/gtfintech/research/banking'>
                                <strong>Banking</strong>
                                </Link>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
  }
}

export default ResearchNavbar;