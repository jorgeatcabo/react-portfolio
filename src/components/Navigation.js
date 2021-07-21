import React from 'react'
import { Nav } from "react-bootstrap"

function Navigation() {
    return (
        <div>
             <Nav className="mr-auto">
      <Nav.Link href="#pricing">Services & Rates</Nav.Link>
      <Nav.Link href="#pricing">Vehicles & Features</Nav.Link>
      <Nav.Link href="#pricing">Testimonials</Nav.Link>
      <Nav.Link href="#pricing">Locations</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      <Nav.Link href="#pricing">Instructions</Nav.Link>
    </Nav>
        </div>
    )
}

export default Navigation
