import React, { useState } from 'react';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import Navigation from './Navigation'
import AboutMe from './pages/AboutMe';
import { Container,Row, Col } from "react-bootstrap";
import Footer from './Footer';
import "../style.css"
import projects from '../projects';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projects}  />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container fluid>
    <Row>  
    <Col>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </Col>
    </Row>
    {renderPage()}
    <br />
    <br />
    </Container>
  );
}
