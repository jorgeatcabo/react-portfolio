import React, { useState } from 'react';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import Navigation from './Navigation'
import AboutMe from './pages/AboutMe';
import { Container,Row, Col } from "react-bootstrap";

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
      return <Portfolio />;
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
    </Container>
  );
}
