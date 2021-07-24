import React, { useState } from 'react';
import Portfolio from './pages/Portfolio'
import Navigation from './Navigation'
import AboutMe from './pages/AboutMe';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { Container,Row, Col } from "react-bootstrap";
import "../style.css"
import projects from '../projects';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

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
    if (currentPage === 'Resume') {
      return <Resume  />;
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
