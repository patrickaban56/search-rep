import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                 <Nav>
                    <NavLink className="d-line p-2 bg-dark text-white" to="/">Home</NavLink>
                    <NavLink className="d-line p-2 bg-dark text-white" to="/search">Search</NavLink>
                 </Nav>
            </Navbar>
        );
    }
}

export default Navigation;