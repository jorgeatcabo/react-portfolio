import React from 'react'
import { Nav, Navbar } from "react-bootstrap"

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Jorge Soto</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link onClick={() => handlePageChange('AboutMe')}>About Me</Nav.Link>
                <Nav.Link onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                <Nav.Link onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
                <Nav.Link onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
                </Nav>
        </Navbar.Collapse>
</Navbar>    
        </div>
    )
}

export default Navigation
