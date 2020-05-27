import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import logo from '../images/GT_White.png';

class Header extends Component{
    render(){
        return(
            <Navbar bg="dark" expand = "lg" fixed="top">
                <Navbar.Brand to ="/"><img alt = "" src={logo} width="200" height="40" className="d-inline-block align-top"/></Navbar.Brand>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/">About</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/people">People</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/research">Research</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/events">Events</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/corporateaffiliates">Corporate Affiliates</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/qcf">QCF</NavLink>
                            <NavLink className = "d-inline p-2 bg-dark text-white" to="/news">News</NavLink>
                        </Nav>
                    </div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-secondary">Search</Button>
                 </Form>
            </Navbar>
        );
    }
}

export default Header;