import React from 'react'
import { Navbar } from "react-bootstrap"
import Navigation from './Navigation'

export default function Header() {
    return (
        <header>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Jorge Soto
            </Navbar.Brand>
            <Navigation/>
        </Navbar> 
        </header>
    )
}
